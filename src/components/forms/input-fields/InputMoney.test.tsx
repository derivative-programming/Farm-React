
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {FormInputMoney} from "./InputMoney";   
import { Formik, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";

interface FormValues {
  testName: string;
}
const initialValues: FormValues  = { testName:"" }  

const handleSubmit = async (values:FormValues, actions:FormikHelpers<FormValues>) => {
  // Add your form submission logic here
  console.log('Form values:', values);
  actions.setSubmitting(false);
};

describe("InputMoney Component", () => {
  // render the InputMoney component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={handleSubmit}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
      <FormInputMoney label="Test Label" name="testName"/> 
      </Form>  
  )}
</Formik>
    );
  });

  // after cleanup when test-case execution is done
   

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
    expect(screen.getByTestId("testName")).not.toHaveFocus();
    expect(screen.getByTestId("testName")).toBeEnabled();
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("when user enter value, it set accordingly in control", async () => {
    const input = screen.getByTestId("testName");

    await act(async () => {
      fireEvent.change(input, { target: { value: "123" } });
    });

    expect(screen.getByTestId("testName")).toHaveValue(123);
  }); 
  
  it("when user sets prop disable to true, control is disabled", async () => {
    const input = screen.getByTestId("testName");

    await act(async () => {
      fireEvent.change(input, { target: { disabled: true } });
    });

    expect(screen.getByTestId("testName")).toBeDisabled();
  }); 

  it("when user sets prop disable to false, control is not disabled", async () => {
    const input = screen.getByTestId("testName");

    await act(async () => {
      fireEvent.change(input, { target: { disabled: false } });
    });

    expect(screen.getByTestId("testName")).not.toBeDisabled();
  }); 
  
  it("when user sets prop autoFocus to true, control is autoFocused", async () => {
    render( 
      <Formik
          initialValues={initialValues} 
          onSubmit={handleSubmit}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
      <FormInputMoney label="Test Label" name="testName2" autoFocus={true}/> 
      </Form>  
  )}
</Formik>
    );

    const input = screen.getByTestId("testName2");

    await act(async () => {
      fireEvent.change(input, { target: { autoFocus: true } });
    });

    expect(screen.getByTestId("testName2")).toHaveFocus();
  }); 
});
