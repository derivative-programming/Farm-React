
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
  // act,
  // fireEvent,
  // waitFor,
} from "@testing-library/react";
// import {FormInputText} from "./InputText";   
// import {FormInputErrorDisplay} from "./InputErrorDisplay";   
import { Formik, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";
import { FormInputDate } from "./InputDate";

interface FormValues {
  testName: string;
}
const initialValues: FormValues  = { testName:"" }  

const handleSubmit = async (values:FormValues, actions:FormikHelpers<FormValues>) => {
  // Add your form submission logic here
  console.log('Form values:', values);
  actions.setSubmitting(false);
};

describe("InputErrorDisplay Component", () => {
  // render the InputErrorDisplay component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues} 
          onSubmit={handleSubmit}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
              <FormInputDate label="Test Label" name="testInputName"/> 
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
