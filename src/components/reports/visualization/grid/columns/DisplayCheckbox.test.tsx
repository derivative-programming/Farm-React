/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { ReportColumnDisplayCheckbox } from "./DisplayCheckbox";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders checked correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayCheckbox forColumn="testColumn" rowIndex={1} isChecked={true} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId("testColumn-column-1-checkbox")).toBeChecked();
  });

  it("renders unchecked correctly", async () => {
    render(
      <table><tbody><tr><ReportColumnDisplayCheckbox forColumn="testColumn" rowIndex={1} isChecked={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId("testColumn-column-1-checkbox")).not.toBeChecked();
  }); 
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
      <table><tbody><tr><ReportColumnDisplayCheckbox forColumn="testColumn" rowIndex={1} isChecked={noVal} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
      <table><tbody><tr><ReportColumnDisplayCheckbox forColumn="testColumn" rowIndex={1} isChecked={true} isVisible={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
});
