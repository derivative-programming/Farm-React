
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,

  
} from "@testing-library/react";
import {ReportColumnDisplayUrl} from "./DisplayUrl";

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayUrl Component", () => {
  // render the ReportColumnDisplayUrl component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
    
 
  it("renders no value correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayUrl forColumn="testColumn" rowIndex={1} value="" linkText="Test Text" /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <table><tbody><tr><ReportColumnDisplayUrl forColumn="testColumn" rowIndex={1} value={noVal} linkText="Test Text" /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
       <table><tbody><tr><ReportColumnDisplayUrl forColumn="testColumn" rowIndex={1} value="test Value" isVisible={false} linkText="test text" /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
 
});
