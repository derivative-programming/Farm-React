
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import ReportSelectTriStateFilter from "./SelectTriStateFilter";  
import { Formik, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";

interface FormValues {
  testName: string;
}
const initialValues: FormValues  = { testName:"" } 
const validationSchema  = {}

const handleSubmit = async (values:FormValues, actions:FormikHelpers<FormValues>) => {
  // Add your form submission logic here
  console.log('Form values:', values);
  actions.setSubmitting(false);
};

describe("ReportSelectTriStateFilter Component", () => {
  // render the ReportSelectTriStateFilter component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <ReportSelectTriStateFilter label="Test Label" name="testName" />
              </Form>  
          )}
      </Formik>
    );
  });

  // after cleanup when test-case execution is done
  

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });
 
});
