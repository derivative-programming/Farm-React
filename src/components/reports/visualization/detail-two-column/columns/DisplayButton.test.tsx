/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {ReportColumnDisplayButton} from "./DisplayButton";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();
const onClick = jest.fn();

const testId = 'testColumn-column-0-button';
 
describe("ReportColumnDisplayButton Component", () => {
  // render the ReportColumnDisplayButton component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders 'test Value' correctly", async () => {
    render(
       <ReportColumnDisplayButton forColumn="testColumn" buttonText="test text" value="test Value" onClick={onClick} />
    );

    expect(screen.getByText("test text")).toBeInTheDocument(); 
    
  });
 
  it("renders no value correctly", async () => {
    render(
       <ReportColumnDisplayButton forColumn="testColumn" buttonText="test label" value="" onClick={onClick} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <ReportColumnDisplayButton forColumn="testColumn" buttonText="test label" value={noVal} onClick={onClick} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
      <ReportColumnDisplayButton forColumn="testColumn" buttonText="test label" value="test value"  onClick={onClick} isVisible={false} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
 
});
