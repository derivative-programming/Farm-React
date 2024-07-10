
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,

  
} from "@testing-library/react";
import {ReportColumnDisplayMoney} from "./DisplayMoney";   



const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

const testId = 'testColumn-column-1';
 
describe("ReportColumnDisplayPhoneNumber Component", () => {
  // render the ReportColumnDisplayPhoneNumber component
  beforeEach(() => {
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders 123 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={123} /></tr></tbody></table>
    );

    expect(screen.getByText("$123.00")).toBeInTheDocument();  
    
  });
  
  it("renders 1234 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={1234} /></tr></tbody></table>
    );

    expect(screen.getByText("$1,234.00")).toBeInTheDocument(); 
  });

  it("renders 1234.5 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={1234.5} /></tr></tbody></table>
    );

    expect(screen.getByText("$1,234.50")).toBeInTheDocument();  

  });
  
  it("renders 1234.56 correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={1234.56} /></tr></tbody></table>
    );

    expect(screen.getByText("$1,234.56")).toBeInTheDocument();   

  }); 
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <table><tbody><tr><ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={noVal} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
       <table><tbody><tr><ReportColumnDisplayMoney forColumn="testColumn" rowIndex={1} value={123} isVisible={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
 
});
