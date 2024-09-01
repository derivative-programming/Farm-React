
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import {ReportColumnDisplayImageUrl} from "./DisplayImageUrl";

const testId = 'testColumn';
 
describe("ReportColumnDisplayImageUrl Component", () => {
  // render the ReportColumnDisplayImageUrl component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
   

  // it("renders 'test Value' correctly", async () => {
  //   render(
  //      <ReportColumnDisplayImageUrl forColumn="testColumn" label="test label" value="test Value" />
  //   );

  //   expect(screen.getByImageUrl("test Value")).toBeInTheDocument(); 
    
  // });
 
  it("renders no value correctly", async () => {
    render(
       <ReportColumnDisplayImageUrl forColumn="testColumn" label="test label" value="" />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders null correctly", async () => {
    const noVal = null;

    render(
       <ReportColumnDisplayImageUrl forColumn="testColumn" label="test label" value={noVal} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
      <ReportColumnDisplayImageUrl forColumn="testColumn" label="test label" value="test value" isVisible={false} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
 
 
});
