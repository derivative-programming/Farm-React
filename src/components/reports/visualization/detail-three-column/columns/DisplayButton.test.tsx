
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import {ReportColumnDisplayButton} from "./DisplayButton";

const onClick = jest.fn();

const testId = 'testColumn';
 
describe("ReportColumnDisplayButton Component", () => {
  // render the ReportColumnDisplayButton component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
  
  it("renders isVisible=false correctly", async () => { 

    render(
      <ReportColumnDisplayButton forColumn="testColumn" buttonText="test label" onClick={onClick} isVisible={false} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
 
 
});
