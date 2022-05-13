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
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import * as registerController from "../../services/auth";

// set the local storage
window.localStorage.setItem("@token", "sampleToken");

// api response
const registerResponse = {
  farmApiKey:
    "1wGB8leJO45V/ZKQY8+qd0JcLJOAvBp3YApjzQkKoB6PAo0gc2+EeHXCtBQ29nZzRBvYYscdaZi/xu5Swod1nhhk4XboUmneuWEJCuWkArj/1GQjVK19vmMoqUrgS1YVGFayCtlMlV1TYuFcEY/WWP2eOd8K/7dPIlA2S/E3e1oZLec+T6D0cVYWF8cmQfCzkBpwSc+YnfCb8Nh5OQXBWtTSe639wrDyUFyU9oWXHbg0jZJ0X/A/4Qv9e0z0cw7ww2k11Q0MbpYhFiDdWzyIpRrcsmm5mB8lSJKyg8YfKiMoKXp37UH3x0qBPe7zdJEFe7XByROyEamjNoLl7O9aZHXF9lIg8VuUKgz2UkQfmQz/yRxQEdzHFMr2eZUHJ457GNECLyI4p30vQwIf/9ePxvGaIl2WyRpiOWMgfjHE6/Llo2Z9dRyZjBfq+3qGtt/GlyLfRkFlQ4wUkZOBNVa6DvKR3Fgq9P5FJWmaqAH1lGwNw+8dsBgUb57+5bhpi1t+xJQCI7VbDgE7b+kTg60tddvvGaSfW9CFGw1igRHNoHzCyGA2t/ymA37dVTvG/jAuPOdc7ic7Or19fFbXW++Vr1sQaGxEEwVES8N5Vl1z8TrwX2BbYeF3QuqiywWHbSUCfYMW432lQrrxvTEOIbCNDoJ6wDC3oDp3PzUQQxc4KZVBcPe3eeH",
  success: true,
  message: "Success.",
  validationErrors: null,
};

describe("Register Component", () => {
  // api mock
  const mockRegister = jest.spyOn(registerController, "register");

  // render the login component
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("register")).toBeInTheDocument();
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

  it("when user enter confirm password, it set accordingly in textbox", async () => {
    const input = screen.getByTestId("confirm-input");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "Test@123" } });
    });

    expect(screen.getByTestId("confirm-input")).toHaveValue("Test@123");
  });

  it("when user enter first name, it set accordingly in textbox", async () => {
    const input = screen.getByTestId("first-name-input");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "jerry" } });
    });

    expect(screen.getByTestId("first-name-input")).toHaveValue("jerry");
  });

  it("when user enter last name, it set accordingly in textbox", async () => {
    const input = screen.getByTestId("last-name-input");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "beggar" } });
    });

    expect(screen.getByTestId("last-name-input")).toHaveValue("beggar");
  });

  it("when user entered register details and clicks on register button, registerUser api should be called", async () => {
    mockRegister.mockResolvedValueOnce({
      data: registerResponse,
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

    // confirm password
    const confirmInput = screen.getByTestId("confirm-input");
    await act(async () => {
      await fireEvent.change(confirmInput, { target: { value: "Test@123" } });
    });

    // first name
    const firstNameInput = screen.getByTestId("first-name-input");
    await act(async () => {
      await fireEvent.change(firstNameInput, { target: { value: "jerry" } });
    });

    // last name
    const lastNameInput = screen.getByTestId("last-name-input");
    await act(async () => {
      await fireEvent.change(lastNameInput, { target: { value: "beggar" } });
    });

    await act(async () => {
      await fireEvent.click(screen.getByTestId("register-btn"));
    });

    await waitFor(() => expect(mockRegister).toHaveBeenCalledTimes(1));
  });
});
