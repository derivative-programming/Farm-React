
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,

  
} from "@testing-library/react";
import {ReportColumnDisplayButton} from "./DisplayButton";

const onClick = jest.fn();

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayButton Component", () => {
  // render the ReportColumnDisplayButton component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
  
  it("renders isVisible=false correctly", async () => { 

    render(
       <table><tbody><tr><ReportColumnDisplayButton forColumn="testColumn" rowIndex={1} buttonText="test text" onClick={onClick} isVisible={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
 
});
