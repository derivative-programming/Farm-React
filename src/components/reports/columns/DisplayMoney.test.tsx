/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {ReportColumnDisplayMoney} from "./DisplayMoney";   
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

  it("renders 123 correctly", async () => {
    render(
      <ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={123} /> 
    );

    expect(screen.getByText("$123.00")).toBeInTheDocument();  
    
  });
  
  it("renders 1234 correctly", async () => {
    render(
      <ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={1234} /> 
    );

    expect(screen.getByText("$1,234.00")).toBeInTheDocument(); 
  });

  it("renders 1234.5 correctly", async () => {
    render(
      <ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={1234.5} /> 
    );

    expect(screen.getByText("$1,234.50")).toBeInTheDocument();  

  });
  
  it("renders 1234.56 correctly", async () => {
    render(
      <ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={1234.56} /> 
    );

    expect(screen.getByText("$1,234.56")).toBeInTheDocument();   

  }); 
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
      <ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={noVal} /> 
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<div data-testid=\"testColumn-column-1\"></div>");
  });
 
 
});
