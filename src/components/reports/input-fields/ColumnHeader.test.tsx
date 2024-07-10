
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import {ReportColumnHeader} from "./ColumnHeader";  
import React from "react";

const onSort = jest.fn();
 
describe("ReportColumnHeader Component", () => {
  // render the ReportColumnHeader component
  beforeEach(() => {
    render(
      <ReportColumnHeader onSort={onSort} name="testName" forColumn="testColumn" isSortDescending={true} label="test label" sortedColumnName=""/> 
    );
  });

  // after cleanup when test-case execution is done
   

  it("renders correctly", async () => {
    expect(screen.getByTestId("testColumn-header")).toBeInTheDocument();
  });

  it("when user enter value, it set accordingly in control", async () => {
    const input = screen.getByTestId("testColumn-header");
    // await act(async () => {
    //   fireEvent.change(input, { target: { value: "test@gmail.com" } });
    // });

    // expect(screen.getByTestId("testName")).toHaveValue("test@gmail.com");
  }); 
});
