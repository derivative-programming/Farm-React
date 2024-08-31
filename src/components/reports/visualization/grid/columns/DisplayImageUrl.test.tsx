
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,

} from "@testing-library/react";
import {ReportColumnDisplayImageUrl} from "./DisplayImageUrl";

const testId = 'testColumn-column-1';

describe("ReportColumnDisplayImageUrl Component", () => {
  // render the ReportColumnDisplayImageUrl component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done

  // it("renders 'test Value' correctly", async () => {
  //   render(
  //      <table><tbody><tr><ReportColumnDisplayImageUrl forColumn="testColumn" rowIndex={1} value="test Value" /></tr></tbody></table>
  //   );

  //   expect(screen.getByImageUrl("test Value")).toBeInTheDocument();

  // });

  it("renders no value correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayImageUrl forColumn="testColumn" rowIndex={1} value="" /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });

  it("renders null correctly", async () => {
    const noVal = null;

    render(
       <table><tbody><tr><ReportColumnDisplayImageUrl forColumn="testColumn" rowIndex={1} value={noVal} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });

  it("renders isVisible=false correctly", async () => {

    render(
       <table><tbody><tr><ReportColumnDisplayImageUrl forColumn="testColumn" rowIndex={1} value="test Value" isVisible={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });

});
