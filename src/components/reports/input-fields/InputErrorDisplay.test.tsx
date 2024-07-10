
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import {ReportInputText} from "./InputText";   
import {ReportInputErrorDisplay} from "./InputErrorDisplay";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { ReportInputDate } from "./InputDate";

const initialValues = { testName:"" } 

const handleSubmit = async (values:any, actions:any) => {
  // Add your form submission logic here
  console.log('Form values:', values);
  actions.setSubmitting(false);
};

describe("ReportInputErrorDisplay Component", () => {
  // render the ReportInputErrorDisplay component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={handleSubmit}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
              <ReportInputDate label="Test Label" name="testInputName"/> 
              </Form>  
          )}
      </Formik>
      
    );
  });

  // after cleanup when test-case execution is done
   

  it("renders correctly", async () => {
    expect(screen.getByTestId("testInputNameErrorDisplay")).toBeInTheDocument(); 
  });

  it("when user enter value, it set accordingly in control", async () => {
    const input = screen.getByTestId("testInputNameErrorDisplay");
    // await act(async () => {
    //   fireEvent.change(input, { target: { value: "test@gmail.com" } });
    // });

    // expect(screen.getByTestId("testName")).toHaveValue("test@gmail.com");
  }); 
});
