
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {FormInputButton} from "./InputButton";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const mockedOnClick = jest.fn();

const handleSubmit = async (values:any, actions:any) => {
  // Add your form submission logic here
  console.log('Form values:', values);
  actions.setSubmitting(false);
};
 
describe("InputButton Component", () => {
  // render the InputButton component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={handleSubmit}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <FormInputButton buttonText="Test Label" name="testName" onClick={mockedOnClick}/> 
              </Form>  
          )}
      </Formik>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
    expect(screen.getByTestId("testName")).not.toHaveFocus();
    expect(screen.getByTestId("testName")).toBeEnabled(); 
  }); 
  
  // it("when user sets prop disable to true, control is disabled", async () => {
  //   const input = screen.getByTestId("testName");

  //   await act(async () => {
  //     fireEvent.change(input, { target: { isEnabled: false } });
  //   });

  //   expect(screen.getByTestId("testName")).toBeDisabled();
  // }); 

  // it("when user sets prop disable to false, control is not disabled", async () => {
  //   const input = screen.getByTestId("testName");

  //   await act(async () => {
  //     fireEvent.change(input, { target: { isEnabled: true } });
  //   });

  //   expect(screen.getByTestId("testName")).not.toBeDisabled();
  // }); 
  
  it("when user sets prop autoFocus to true, control is autoFocused", async () => {
    render( 
      <Formik
          initialValues={initialValues} 
          onSubmit={handleSubmit}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <FormInputButton buttonText="Test Label" name="testName2" autoFocus={true}  onClick={mockedOnClick}/> 
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
