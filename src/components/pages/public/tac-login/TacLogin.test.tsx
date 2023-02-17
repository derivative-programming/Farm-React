/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import TacLogin from "./TacLogin";
import { BrowserRouter } from "react-router-dom";
import * as TacLoginService from "../../../../components/forms/services/TacLogin";

// set the local storage
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();

// mock the useNavigate method
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const tacLoginResponse = {
  apiKey:
    "1wGB8leJO45V/ZKQY8+qd0JcLJOAvBp3YApjzQkKoB6PAo0gc2+EeHXCtBQ29nZzRBvYYscdaZi/xu5Swod1nhhk4XboUmneuWEJCuWkArj/1GQjVK19vmMoqUrgS1YVGFayCtlMlV1TYuFcEY/WWP2eOd8K/7dPIlA2S/E3e1oZLec+T6D0cVYWF8cmQfCzkBpwSc+YnfCb8Nh5OQXBWtTSe639wrDyUFyU9oWXHbg0jZJ0X/A/4Qv9e0z0cw7ww2k11Q0MbpYhFiDdWzyIpRrcsmm5mB8lSJKyg8YfKiMoKXp37UH3x0qBPe7zdJEFe7XByROyEamjNoLl7O9aZHXF9lIg8VuUKgz2UkQfmQz/yRxQEdzHFMr2eZUHJ457GNECLyI4p30vQwIf/9ePxvGaIl2WyRpiOWMgfjHE6/Llo2Z9dRyZjBfq+3qGtt/GlyLfRkFlQ4wUkZOBNVa6DvKR3Fgq9P5FJWmaqAH1lGwNw+8dsBgUb57+5bhpi1t+xJQCI7VbDgE7b+kTg60tddvvGaSfW9CFGw1igRHNoHzCyGA2t/ymA37dVTvG/jAuPOdc7ic7Or19fFbXW++Vr1sQaGxEEwVES8N5Vl1z8TrwX2BbYeF3QuqiywWHbSUCfYMW432lQrrxvTEOIbCNDoJ6wDC3oDp3PzUQQxc4KZVBcPe3eeH",
  success: true,
  message: "Success.",
  validationErrors: null,
};

describe("TacLogin Component", () => {
  // render the TacLogin component
  beforeEach(() => {
    render(
      <BrowserRouter>
        <TacLogin />
      </BrowserRouter>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  const mockTacLoginService = jest.spyOn(TacLoginService, "submitForm");

  it("renders correctly", async () => {
    expect(screen.getByTestId("tacLogin")).toBeInTheDocument();
  });

  it("when user enter email address, it set accordingly in textbox", async () => {
    const input = screen.getByTestId("email-input");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "test@gmail.com" } });
    });

    expect(screen.getByTestId("email-input")).toHaveValue("test@gmail.com");
  });

  it("when user enter password, it set accordingly in textbox", async () => {
    const input = screen.getByTestId("password-input");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "Test@123" } });
    });

    expect(screen.getByTestId("password-input")).toHaveValue("Test@123");
  });

  it("when user clicks on registration button, it redirect the registration page", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("registration-btn"));
    });

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/tac-register");
  });

  it("when user entered tacLogin details and clicks on login button, tacLogin api should be called", async () => {
    mockTacLoginService.mockResolvedValueOnce({
      data: tacLoginResponse,
    });

    // enter email address
    const emailInput = screen.getByTestId("email-input");
    await act(async () => {
      await fireEvent.change(emailInput, {
        target: { value: "test@gmail.com" },
      });
    });

    // enter password
    const passwordInput = screen.getByTestId("password-input");
    await act(async () => {
      await fireEvent.change(passwordInput, { target: { value: "Test@123" } });
    });

    await act(async () => {
      await fireEvent.click(screen.getByTestId("login-btn"));
    });

    await waitFor(() => expect(mockTacLoginService).toHaveBeenCalledTimes(1));
  });
});
