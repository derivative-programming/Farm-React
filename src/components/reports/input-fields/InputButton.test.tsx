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
import {ReportInputButton} from "./InputButton";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const mockedOnClick = jest.fn();
 
describe("ReportInputButton Component", () => {
  // render the ReportInputButton component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={async (values,actions) => {}}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <ReportInputButton buttonText="Test Label" name="testName" onClick={mockedOnClick}/> 
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
  
  it("when user sets prop disable to true, control is disabled", async () => {
    const input = screen.getByTestId("testName");

    await act(async () => {
      await fireEvent.change(input, { target: { disabled: true } });
    });

    expect(screen.getByTestId("testName")).toBeDisabled();
  }); 

  it("when user sets prop disable to false, control is not disabled", async () => {
    const input = screen.getByTestId("testName");

    await act(async () => {
      await fireEvent.change(input, { target: { disabled: false } });
    });

    expect(screen.getByTestId("testName")).not.toBeDisabled();
  }); 
   
});
