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
import {FormInputCheckbox} from "./InputCheckbox";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 
 
describe("InputCheckbox Component", () => {
  // render the InputCheckbox component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={async (values,actions) => {}}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <FormInputCheckbox label="Test Label" name="testName"/> 
              </Form>  
          )}
      </Formik>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });

  it("when user checks, it set accordingly in control", async () => {
    const input = screen.getByTestId("testName");
    await act(async () => {
        await fireEvent.change(input, { target: { checked: true } });
    });

    expect(screen.getByTestId("testName")).toBeChecked();
  }); 

  it("when user unchecks, it set accordingly in control", async () => {
    const input = screen.getByTestId("testName");
    await act(async () => {
        await fireEvent.change(input, { target: { checked: false } });
    });

    expect(screen.getByTestId("testName")).not.toBeChecked();
  }); 
});
