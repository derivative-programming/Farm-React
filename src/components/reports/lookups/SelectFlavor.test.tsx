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
import ReportSelectFlavor from "./SelectFlavor";  
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" }
const validationSchema  = {}

describe("ReportSelectFlavor Component", () => {
  // render the ReportSelectFlavor component
  beforeEach(() => {
    render(
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values,actions) => {}}>
          {(props) => (
              <Form onReset={props.handleReset} onSubmit={props.handleSubmit}> 
                <ReportSelectFlavor label="Test Label" name="testName" />
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
