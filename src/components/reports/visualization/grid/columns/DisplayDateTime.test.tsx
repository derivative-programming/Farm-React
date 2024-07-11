
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,

  
} from "@testing-library/react"; 


import { ReportColumnDisplayDateTime } from "./DisplayDateTime";

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done
   

  it("renders 2034-01-03T13:45:00Z correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value={"2034-01-03T13:45:00Z"} /></tr></tbody></table>
    );

    expect(screen.getByText("1/3/2034 8:45 AM")).toBeInTheDocument();   

  });

  it("renders 1753-01-01T00:00:00Z correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value={"1753-01-01T00:00:00Z"} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  }); 
  
  it("renders null correctly", async () => {
    const noVal = null;

    render(
       <table><tbody><tr><ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value={noVal} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
       <table><tbody><tr><ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value="2034-01-03T00:45:00Z" isVisible={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
 
});
