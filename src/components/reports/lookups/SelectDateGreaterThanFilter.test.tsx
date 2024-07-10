
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import ReportSelectDateGreaterThanFilter from "./SelectDateGreaterThanFilter";  
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" }
const validationSchema  = {}

const handleSubmit = async (values:any, actions:any) => {
  // Add your form submission logic here
  console.log('Form values:', values);
  actions.setSubmitting(false);
};

describe("ReportSelectDateGreaterThanFilter Component", () => {
  // render the ReportSelectDateGreaterThanFilter component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <ReportSelectDateGreaterThanFilter label="Test Label" name="testName" />
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
 
});
