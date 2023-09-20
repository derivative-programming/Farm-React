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
import FormConnectedTacLogin from "./TacLogin"; 
import { BrowserRouter } from "react-router-dom";
import * as FormService from "../services/TacLogin";
import * as InitFormService from "../services/init/TacLoginInitObjWF"; 
import "fake-indexeddb/auto";
 
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn(); 

// mock the useNavigate method
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const mockFormInitService = jest.spyOn(FormService, "initForm");
const mockFormSubmitService =  jest.spyOn(FormService, "submitForm"); 

let formSubmitResponse = new FormService.SubmitResultInstance();
const formInitResponse = new InitFormService.InitResultInstance();

describe("TacLogin Component", () => {
  // render the TacLogin component
  beforeEach(async() => {
    mockFormInitService.mockResolvedValue({
      data: formInitResponse,
    });

    render(
      <BrowserRouter>
        <FormConnectedTacLogin name="testForm" showProcessingAnimationOnInit={false} />
      </BrowserRouter>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders correctly", async () => { 

    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("other-button")).toBeInTheDocument();
    
    //expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email and password.")).toBeInTheDocument();
    
    await waitFor(() => expect(mockFormInitService).toHaveBeenCalled());
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

  it("when user clicks on registration button, it redirect the registration page", async () => { 

    await act(async () => {
      fireEvent.click(screen.getByTestId("other-button"));
    });

    //expect(mockedUsedNavigate).toHaveBeenCalledWith("/tac-register");
  });

  it("when user entered tacLogin details and clicks on login button, tacLogin api should be called", async () => {
    mockFormSubmitService.mockResolvedValue({
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

    await act(async () => {
      await fireEvent.click(screen.getByTestId("submit-button"));
    }); 

    await waitFor(() => expect(mockFormSubmitService).toHaveBeenCalled());
  });
});
