
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import {ReportColumnDisplayUrl} from "./DisplayUrl";

const testId = 'testColumn';
 
describe("ReportColumnDisplayUrl Component", () => {
  // render the ReportColumnDisplayUrl component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
   
 
 
  it("renders no value correctly", async () => {
    render(
       <ReportColumnDisplayUrl forColumn="testColumn" label="test label" value="" linkText="Test Text" />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <ReportColumnDisplayUrl forColumn="testColumn" label="test label" value={noVal} linkText="Test Text" />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
      <ReportColumnDisplayUrl forColumn="testColumn" label="test label" value="test value" isVisible={false} linkText="Test Text" />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
 
 
});
