/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {ReportPagination} from "./Pagination";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const onPageSelection = jest.fn();
const onPageSizeChange = jest.fn();

const controlName = "testName";
const paginationId = controlName  + "-pageination";
const paginationPageSizeSelectId = paginationId  + "-select-page-size";
const paginationFirstId = paginationId  + "-first";
const paginationPrevId = paginationId  + "-prev";
const paginationNextId = paginationId  + "-next";
const paginationLastId = paginationId  + "-last";
const paginationCountDisplayId = paginationId  + "-count-display";

 
describe("ReportPagination Component", () => {
  // render the ReportPagination component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders correctly", async () => {
    render(
      <ReportPagination 
        name={controlName} 
        currentPage={5} 
        currentPageItemCount={10} 
        pageSize={10} 
        totalItemCount={100}
        onPageSelection={onPageSelection}
        onPageSizeChange={onPageSizeChange}/> 
        ); 
    
    expect(screen.getByTestId(controlName)).toBeVisible()
    expect(screen.getByTestId(paginationId)).toBeVisible();
    expect(screen.getByTestId(paginationFirstId)).toBeVisible();
    expect(screen.getByTestId(paginationPrevId)).toBeVisible();
    expect(screen.getByTestId(paginationNextId)).toBeVisible();
    expect(screen.getByTestId(paginationLastId)).toBeVisible();
    expect(screen.getByTestId(paginationCountDisplayId)).toBeVisible();
  });

  
  it("should hide if no items", async () => {
    render(
      <ReportPagination 
        name={controlName} 
        currentPage={1} 
        currentPageItemCount={10} 
        pageSize={10} 
        totalItemCount={0}
        onPageSelection={onPageSelection}
        onPageSizeChange={onPageSizeChange}/> 
        ); 
    
    expect(screen.getByTestId(controlName)).not.toBeVisible()
    expect(screen.getByTestId(paginationId)).not.toBeVisible();
    expect(screen.getByTestId(paginationFirstId)).not.toBeVisible();
    expect(screen.getByTestId(paginationPrevId)).not.toBeVisible();
    expect(screen.getByTestId(paginationNextId)).not.toBeVisible();
    expect(screen.getByTestId(paginationLastId)).not.toBeVisible();
    expect(screen.getByTestId(paginationCountDisplayId)).not.toBeVisible();
  });
  
  it("should hide first page buton and prev button if on first page", async () => {
    render(
      <ReportPagination 
        name={controlName} 
        currentPage={1} 
        currentPageItemCount={10} 
        pageSize={10} 
        totalItemCount={100}
        onPageSelection={onPageSelection}
        onPageSizeChange={onPageSizeChange}/> 
        ); 
    
    expect(screen.getByTestId(controlName)).toBeVisible()
    expect(screen.getByTestId(paginationId)).toBeVisible();
    expect(screen.getByTestId(paginationFirstId)).not.toBeVisible();
    expect(screen.getByTestId(paginationPrevId)).not.toBeVisible();
    expect(screen.getByTestId(paginationNextId)).toBeVisible();
    expect(screen.getByTestId(paginationLastId)).toBeVisible();
    expect(screen.getByTestId(paginationCountDisplayId)).toBeVisible();
  });
  
  it("should hide  prev button if on second page", async () => {
    render(
      <ReportPagination 
        name={controlName} 
        currentPage={2} 
        currentPageItemCount={10} 
        pageSize={10} 
        totalItemCount={100}
        onPageSelection={onPageSelection}
        onPageSizeChange={onPageSizeChange}/> 
        ); 
    
    expect(screen.getByTestId(controlName)).toBeVisible()
    expect(screen.getByTestId(paginationId)).toBeVisible();
    expect(screen.getByTestId(paginationFirstId)).toBeVisible();
    expect(screen.getByTestId(paginationPrevId)).not.toBeVisible();
    expect(screen.getByTestId(paginationNextId)).toBeVisible();
    expect(screen.getByTestId(paginationLastId)).toBeVisible();
    expect(screen.getByTestId(paginationCountDisplayId)).toBeVisible();
  });

  
  it("should hide last page buton and next button if on last page", async () => {
    render(
      <ReportPagination 
        name={controlName} 
        currentPage={10} 
        currentPageItemCount={10} 
        pageSize={10} 
        totalItemCount={100}
        onPageSelection={onPageSelection}
        onPageSizeChange={onPageSizeChange}/> 
        ); 
    
    expect(screen.getByTestId(controlName)).toBeVisible()
    expect(screen.getByTestId(paginationId)).toBeVisible();
    expect(screen.getByTestId(paginationFirstId)).toBeVisible();
    expect(screen.getByTestId(paginationPrevId)).toBeVisible();
    expect(screen.getByTestId(paginationNextId)).not.toBeVisible();
    expect(screen.getByTestId(paginationLastId)).not.toBeVisible();
    expect(screen.getByTestId(paginationCountDisplayId)).toBeVisible();
  });
  
  it("should hide  next button if on next to last page", async () => {
    render(
      <ReportPagination 
        name={controlName} 
        currentPage={9} 
        currentPageItemCount={10} 
        pageSize={10} 
        totalItemCount={100}
        onPageSelection={onPageSelection}
        onPageSizeChange={onPageSizeChange}/> 
        ); 
    
    expect(screen.getByTestId(controlName)).toBeVisible()
    expect(screen.getByTestId(paginationId)).toBeVisible();
    expect(screen.getByTestId(paginationFirstId)).toBeVisible();
    expect(screen.getByTestId(paginationPrevId)).toBeVisible();
    expect(screen.getByTestId(paginationNextId)).not.toBeVisible();
    expect(screen.getByTestId(paginationLastId)).toBeVisible();
    expect(screen.getByTestId(paginationCountDisplayId)).toBeVisible();
  });
  
  

  it("when user enter value, it set accordingly in control", async () => {
    
    // await act(async () => {
    //   await fireEvent.change(input, { target: { value: "test@gmail.com" } });
    // });

    // expect(screen.getByTestId("testName")).toHaveValue("test@gmail.com");
  }); 
});
