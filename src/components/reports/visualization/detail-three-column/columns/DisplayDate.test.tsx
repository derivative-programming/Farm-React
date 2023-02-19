/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {ReportColumnDisplayDate} from "./DisplayDate";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

const testId = 'testColumn-column';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders 01-03-2034 13:45:00 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayDate forColumn="testColumn" label="test label" value={new Date("01-03-2034 13:45:00 UTC")} /></tr></tbody></table>
    );

    expect(screen.getByText("1/3/2034")).toBeInTheDocument(); 

  });

  it("renders 01-03-2034 00:45:00 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayDate forColumn="testColumn" label="test label" value={new Date("01-03-2034 00:45:00 UTC")} /></tr></tbody></table>
    );

    expect(screen.getByText("1/2/2034")).toBeInTheDocument();  

  });

  it("renders 01-01-1753 00:00:00 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayDate forColumn="testColumn" label="test label" value={new Date("01-01-1753 00:00:00 UTC")} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    
    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  }); 
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
      <ReportColumnDisplayDate forColumn="testColumn" label="test label" value={noVal} /> 
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
 
});
