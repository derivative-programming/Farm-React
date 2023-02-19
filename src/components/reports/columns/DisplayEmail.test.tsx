/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {ReportColumnDisplayEmail} from "./DisplayEmail";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders correctly", async () => {
    render(
      <ReportColumnDisplayEmail forColumn="testColumn" rowIndex={1} value="test Value" /> 
    );

    expect(screen.getByText("test Value")).toBeInTheDocument();    
  });
 
  it("renders no value correctly", async () => {
    render(
      <ReportColumnDisplayEmail forColumn="testColumn" rowIndex={1} value="" /> 
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<div data-testid=\"testColumn-column-1\"></div>");
  });
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
      <ReportColumnDisplayEmail forColumn="testColumn" rowIndex={1} value={noVal} /> 
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<div data-testid=\"testColumn-column-1\"></div>");
  });
 
 
});
