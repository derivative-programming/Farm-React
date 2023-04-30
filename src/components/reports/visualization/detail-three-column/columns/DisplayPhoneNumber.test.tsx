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

const testId = 'testColumn';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders 1234567 correctly", async () => {
    render(
       <ReportColumnDisplayPhoneNumber forColumn="testColumn" label="test label" value="1234567" />
    );

    expect(screen.getByText("123-4567")).toBeInTheDocument(); 
    
  });
  
  it("renders 123 4567 correctly", async () => {
    render(
       <ReportColumnDisplayPhoneNumber forColumn="testColumn" label="test label" value="123 4567" />
    );

    expect(screen.getByText("123-4567")).toBeInTheDocument(); 

  });
  
  it("renders 123-4567 correctly", async () => {
    render(
       <ReportColumnDisplayPhoneNumber forColumn="testColumn" label="test label" value="123-4567" />
    );

    expect(screen.getByText("123-4567")).toBeInTheDocument(); 

  });
  
  it("renders 1234567890 correctly", async () => {
    render(
       <ReportColumnDisplayPhoneNumber forColumn="testColumn" label="test label" value="1234567890" />
    );

    expect(screen.getByText("(123) 456-7890")).toBeInTheDocument(); 
    
  });
 
  it("renders no value correctly", async () => {
    render(
       <ReportColumnDisplayPhoneNumber forColumn="testColumn" label="test label" value="" />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <ReportColumnDisplayPhoneNumber forColumn="testColumn" label="test label" value={noVal} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
      <ReportColumnDisplayPhoneNumber forColumn="testColumn" label="test label" value="test value" isVisible={false} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
 
  
 
});
