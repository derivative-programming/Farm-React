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

const testId = 'testColumn';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders checked correctly", async () => {
    render(
       <ReportColumnDisplayCheckbox forColumn="testColumn" label="test label" isChecked={true}/>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId("testColumn-checkbox")).toBeChecked();
  });

  it("renders unchecked correctly", async () => {
    render(
       <ReportColumnDisplayCheckbox forColumn="testColumn" label="test label" isChecked={false} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId("testColumn-checkbox")).not.toBeChecked();
  }); 
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <ReportColumnDisplayCheckbox forColumn="testColumn" label="test label" isChecked={noVal} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
       <ReportColumnDisplayCheckbox forColumn="testColumn" label="test label" isChecked={true} isVisible={false} />
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-1\" />");
  });
 
});
