import {
  render,

  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import FormConnectedTacRegister from "./TacRegister";
import { BrowserRouter } from "react-router-dom";
import * as FormService from "../services/TacRegister";
import * as InitFormService from "../services/init/TacRegisterInitObjWF";

import "fake-indexeddb/auto";

window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockParams = jest.fn();

// mock the useNavigate method
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockParams.mockReturnValue({ id: "00000000-0000-0000-0000-000000000000",}),
}));

const mockFormInitService = jest.spyOn(FormService, "initForm");
const mockFormSubmitService =  jest.spyOn(FormService, "submitForm");

const formSubmitResponse = new FormService.SubmitResultInstance();
const formInitResponse = new InitFormService.InitResultInstance();

describe("TacRegister Component", () => {

  beforeEach(async () => {
      mockFormInitService.mockResolvedValue({
        data: new InitFormService.InitResultInstance(),
      });

//endset

      await act(async () => {
        render(
          <BrowserRouter>
            <FormConnectedTacRegister name="testForm" showProcessingAnimationOnInit={false} />
          </BrowserRouter>
        );
      })

  });

  // after cleanup when test-case execution is done

  it("renders correctly", async () => {
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    expect(screen.getByTestId("headerErrors")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("confirmPassword")).toBeInTheDocument();
    expect(screen.getByTestId("firstName")).toBeInTheDocument();
    expect(screen.getByTestId("lastName")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-button")).toBeInTheDocument();

    if("Create your account".length > 0){
      expect(screen.getByTestId("page-title-text"))
        .toBeInTheDocument();
      expect(screen.getByTestId("page-title-text"))
        .toHaveTextContent("Create your account");
    }
    if("A Couple Details Then We Are Off!".length > 0){
      expect(screen.getByTestId("page-intro-text")).toBeInTheDocument();
      expect(screen.getByTestId("page-intro-text"))
        .toHaveTextContent("A Couple Details Then We Are Off!");
    }
    if("".length > 0){
      expect(screen.getByTestId("page-footer-text")).toBeInTheDocument();
      expect(screen.getByTestId("page-footer-text"))
        .toHaveTextContent("");
    }

    await waitFor(() => expect(mockFormInitService).toHaveBeenCalled());
  });
  it("when user enter email, it set accordingly", async () => {
    const input = screen.getByTestId("email");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    });
    expect(screen.getByTestId("email")).toHaveValue("sample data");
  });
  it("when user enter password, it set accordingly", async () => {
    const input = screen.getByTestId("password");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    });
    expect(screen.getByTestId("password")).toHaveValue("sample data");
  });
  it("when user enter confirmPassword, it set accordingly", async () => {
    const input = screen.getByTestId("confirmPassword");
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    });
    expect(screen.getByTestId("confirmPassword")).toHaveValue("sample data");
  });
  it("when user enter firstName, it set accordingly", async () => {

    const input = screen.getByTestId("firstName");
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    });
    expect(screen.getByTestId("firstName")).toHaveValue("sample data");
  });
  it("when user enter lastName, it set accordingly", async () => {

    const input = screen.getByTestId("lastName");
    expect(screen.getByTestId("testForm")).toBeInTheDocument();
    await act(async () => {
      fireEvent.change(input, { target: { value: "sample data" } });
    });
    expect(screen.getByTestId("lastName")).toHaveValue("sample data");
  });

  it("when user entered TacRegister details and clicks on register button, TacRegister api should be called", async () => {
    mockFormSubmitService.mockResolvedValue({
      data: formSubmitResponse,
    });
    const emailInput = screen.getByTestId("email");
    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "Sample Data" } });
    });
    const passwordInput = screen.getByTestId("password");
    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "Sample Data" } });
    });
    const confirmPasswordInput = screen.getByTestId("confirmPassword");
    await act(async () => {
      fireEvent.change(confirmPasswordInput, { target: { value: "Sample Data" } });
    });
    const firstNameInput = screen.getByTestId("firstName");
    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: "Test@123" } });
    });
    const lastNameInput = screen.getByTestId("lastName");
    await act(async () => {
      fireEvent.change(lastNameInput, { target: { value: "Test@123" } });
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId("submit-button"));
    });

    await waitFor(() => expect(mockFormSubmitService).toHaveBeenCalled());
  });
});

