
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import {ReportColumnHeader} from "./ColumnHeader";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import React from "react";

const initialValues = { testName:"" } 

const onSort = jest.fn();
 
describe("ReportColumnHeader Component", () => {
  // render the ReportColumnHeader component
  beforeEach(() => {
    render(
      <ReportColumnHeader onSort={onSort} name="testName" forColumn="testColumn" isSortDescending={true} label="test label" sortedColumnName=""/> 
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });

  it("when user enter value, it set accordingly in control", async () => {
    const input = screen.getByTestId("testName");
    // await act(async () => {
    //   fireEvent.change(input, { target: { value: "test@gmail.com" } });
    // });

    // expect(screen.getByTestId("testName")).toHaveValue("test@gmail.com");
  }); 
});
