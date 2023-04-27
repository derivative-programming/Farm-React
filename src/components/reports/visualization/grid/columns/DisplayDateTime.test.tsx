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
import { ReportColumnDisplayDateTime } from "./DisplayDateTime";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 


  const isDateTimeText = (text: string) => {
    const dateTimeRegex = /^\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{2} (AM|PM)$/;
    return dateTimeRegex.test(text);
  };
  
  it("renders 01-03-2034 13:45:00 correctly", async () => {
    render(
      <table><tbody><tr><ReportColumnDisplayDateTime
        forColumn="testColumn" rowIndex={1} value={"01-03-2034 13:45:00"}
      /></tr></tbody></table>
    );
  
    const element = screen.getByText(isDateTimeText);
    expect(element).toBeInTheDocument();   
  });

  it("renders 01-01-1753 00:00:00 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value={"01-01-1753 00:00:00"} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  }); 
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <table><tbody><tr><ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value={noVal} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
       <table><tbody><tr><ReportColumnDisplayDateTime forColumn="testColumn" rowIndex={1} value="01-03-2034 00:45:00" isVisible={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
 
});
