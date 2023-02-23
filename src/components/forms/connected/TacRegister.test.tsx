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
import FormConnectedTacRegister from "./TacRegister"; 
import { BrowserRouter } from "react-router-dom"; 
import * as FormService from "../services/TacRegister";

// set the local storage
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();

// mock the useNavigate method
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const mockFormInitService = jest.spyOn(FormService, "initForm");
const mockFormSubmitService =  jest.spyOn(FormService, "submitForm");

let formSubmitResponse = new FormService.SubmitResultInstance;
const formInitResponse = new FormService.InitResultInstance;
 
describe("TacRegister Component", () => {

  beforeEach(async() => { 
      mockFormInitService.mockResolvedValueOnce({
        data: formInitResponse,
      });

    render(
      <BrowserRouter>
        <FormConnectedTacRegister name="testForm" />
      </BrowserRouter>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("confirmPassword")).toBeInTheDocument();
    expect(screen.getByTestId("firstName")).toBeInTheDocument();
    expect(screen.getByTestId("lastName")).toBeInTheDocument();
    
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
    
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email and password.")).toBeInTheDocument();
    
    await waitFor(() => expect(mockFormInitService).toHaveBeenCalledTimes(1));
  });

  it("when user enter email address, it set accordingly", async () => {
    const input = screen.getByTestId("email");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "test@gmail.com" } });
    });

    expect(screen.getByTestId("email")).toHaveValue("test@gmail.com");
  });

  it("when user enter password, it set accordingly", async () => {
    const input = screen.getByTestId("password");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "Test@123" } });
    });

    expect(screen.getByTestId("password")).toHaveValue("Test@123");
  });

  it("when user enter confirm password, it set accordingly", async () => {
    const input = screen.getByTestId("confirmPassword");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "Test@123" } });
    });

    expect(screen.getByTestId("confirmPassword")).toHaveValue("Test@123");
  });

  it("when user enter first name, it set accordingly", async () => {
    const input = screen.getByTestId("firstName");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "jerry" } });
    });

    expect(screen.getByTestId("firstName")).toHaveValue("jerry");
  });

  it("when user enter last name, it set accordingly", async () => {
    const input = screen.getByTestId("lastName");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "beggar" } });
    });

    expect(screen.getByTestId("lastName")).toHaveValue("beggar");
  });

  it("when user entered tacRegister details and clicks on register button, tacRegisterUser api should be called", async () => {
    mockFormSubmitService.mockResolvedValueOnce({
      data: formSubmitResponse,
    }); 

    // enter email address
    const emailInput = screen.getByTestId("email");
    await act(async () => {
      await fireEvent.change(emailInput, {
        target: { value: "test@gmail.com" },
      });
    });

    // enter password
    const passwordInput = screen.getByTestId("password");
    await act(async () => {
      await fireEvent.change(passwordInput, { target: { value: "Test@123" } });
    });

    // confirm password
    const confirmInput = screen.getByTestId("confirmPassword");
    await act(async () => {
      await fireEvent.change(confirmInput, { target: { value: "Test@123" } });
    });

    // first name
    const firstNameInput = screen.getByTestId("firstName");
    await act(async () => {
      await fireEvent.change(firstNameInput, { target: { value: "jerry" } });
    });

    // last name
    const lastNameInput = screen.getByTestId("lastName");
    await act(async () => {
      await fireEvent.change(lastNameInput, { target: { value: "beggar" } });
    });

    await act(async () => {
      await fireEvent.click(screen.getByTestId("submit"));
    });

    await waitFor(() => expect(mockFormSubmitService).toHaveBeenCalledTimes(1));
  });
});
