
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import {ReportColumnDisplayText} from "./DisplayText";

const testId = 'testColumn';
 
describe("ReportColumnDisplayText Component", () => {
  // render the ReportColumnDisplayText component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
   

  it("renders 'test Value' correctly", async () => {
    render(
       <ReportColumnDisplayText forColumn="testColumn" label="test label" value="test Value" />
    );

    expect(screen.getByText("test Value")).toBeInTheDocument(); 
    
  });
 
  it("renders no value correctly", async () => {
    render(
       <ReportColumnDisplayText forColumn="testColumn" label="test label" value="" />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders null correctly", async () => {
    const noVal = null;

    render(
       <ReportColumnDisplayText forColumn="testColumn" label="test label" value={noVal} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
      <ReportColumnDisplayText forColumn="testColumn" label="test label" value="test value" isVisible={false} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
 
 
});
