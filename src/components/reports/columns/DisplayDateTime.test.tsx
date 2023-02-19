/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react"; 
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { ReportColumnDisplayDateTime } from "./DisplayDateTime";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders 01-03-2034 13:45:00 correctly", async () => {
    render(
      <ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value={new Date("01-03-2034 13:45:00 UTC")} /> 
    );

    expect(screen.getByText("1/3/2034 8:45 AM")).toBeInTheDocument();   

  });

  it("renders 01-01-1753 00:00:00 correctly", async () => {
    render(
      <ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value={new Date("01-01-1753 00:00:00 UTC")} /> 
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<div data-testid=\"testColumn-column-1\"></div>");
  }); 
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
      <ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value={noVal} /> 
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<div data-testid=\"testColumn-column-1\"></div>");
  });
 
 
});
