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
import {ReportInputCheckbox} from "./InputCheckbox";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 
 
describe("ReportInputCheckbox Component", () => {
  // render the ReportInputCheckbox component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={async (values,actions) => {}}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <ReportInputCheckbox label="Test Label" name="testName"/> 
              </Form>  
          )}
      </Formik>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
    expect(screen.getByTestId("testName-field")).toBeInTheDocument();
    expect(screen.getByTestId("testName-field")).not.toHaveFocus();
    expect(screen.getByTestId("testName-field")).toBeEnabled();
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("when user checks, it set accordingly in control", async () => {
    const input = screen.getByTestId("testName-field"); 
    fireEvent.click(screen.getByTestId("testName-field"));
    expect(screen.getByTestId("testName-field")).toBeChecked();
  }); 

  it("when user unchecks, it set accordingly in control", async () => {
    const input = screen.getByTestId("testName-field");
    await act(async () => {
        await fireEvent.change(input, { target: { checked: false } });
    });

    expect(screen.getByTestId("testName-field")).not.toBeChecked();
  }); 
  
  it("when user sets prop disable to true, control is disabled", async () => {
    const input = screen.getByTestId("testName-field");

    await act(async () => {
      await fireEvent.change(input, { target: { disabled: true } });
    });

    expect(screen.getByTestId("testName-field")).toBeDisabled();
  }); 

  it("when user sets prop disable to false, control is not disabled", async () => {
    const input = screen.getByTestId("testName-field");

    await act(async () => {
      await fireEvent.change(input, { target: { disabled: false } });
    });

    expect(screen.getByTestId("testName-field")).not.toBeDisabled();
  }); 
  
  it("when user sets prop autoFocus to true, control is autoFocused", async () => {
    render( 
      <Formik
          initialValues={initialValues} 
          onSubmit={async (values,actions) => {}}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <ReportInputCheckbox label="Test Label" name="testName2" autoFocus={true}/> 
              </Form>  
          )}
      </Formik>
    );

    const input = screen.getByTestId("testName2-field");

    await act(async () => {
      await fireEvent.change(input, { target: { autoFocus: true } });
    });

    expect(screen.getByTestId("testName2-field")).toHaveFocus();
  }); 
});
