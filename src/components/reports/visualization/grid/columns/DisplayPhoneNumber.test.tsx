/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {ReportColumnDisplayPhoneNumber} from "./DisplayPhoneNumber";   
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

  it("renders 1234567 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayPhoneNumber forColumn="testColumn" rowIndex={1} value="1234567" /></tr></tbody></table>
    );

    expect(screen.getByText("123-4567")).toBeInTheDocument(); 
    
  });
  
  it("renders 123 4567 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayPhoneNumber forColumn="testColumn" rowIndex={1} value="123 4567" /></tr></tbody></table>
    );

    expect(screen.getByText("123-4567")).toBeInTheDocument(); 

  });
  
  it("renders 123-4567 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayPhoneNumber forColumn="testColumn" rowIndex={1} value="123-4567" /></tr></tbody></table>
    );

    expect(screen.getByText("123-4567")).toBeInTheDocument(); 

  });
  
  it("renders 1234567890 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayPhoneNumber forColumn="testColumn" rowIndex={1} value="1234567890" /></tr></tbody></table>
    );

    expect(screen.getByText("(123) 456-7890")).toBeInTheDocument(); 
    
  });
 
  it("renders no value correctly", async () => {
    render(
      <table><tbody><tr><ReportColumnDisplayPhoneNumber forColumn="testColumn" rowIndex={1} value="" /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <table><tbody><tr><ReportColumnDisplayPhoneNumber forColumn="testColumn" rowIndex={1} value={noVal} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
       <table><tbody><tr><ReportColumnDisplayPhoneNumber forColumn="testColumn" rowIndex={1} value="test Value" isVisible={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
  
 
});
