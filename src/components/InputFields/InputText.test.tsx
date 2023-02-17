/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {InputText} from "./InputText";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

 
describe("InputText Component", () => {
  // render the InputText component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={async (values,actions) => {}}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={handleSubmit}> 
      <InputText label="Test Label" name="testName"/> 
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

  it("when user enter value, it set accordingly in control", async () => {
    const input = screen.getByTestId("testName");  

    await act(async () => {
      await fireEvent.change(input, { target: { value: "test@gmail.com" } });
    });

    expect(screen.getByTestId("testName")).toHaveValue("test@gmail.com");
  }); 
});
