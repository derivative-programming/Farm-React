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
import ReportFilterPlantUserDetails from "./PlantUserDetails";  
import * as PacUserFlavorList from "../../lookups/services/PacUserFlavorList"
import * as ReportService from "../services/PlantUserDetails";  
 
window.localStorage.setItem("@token", "sampleToken");
 
const mockPacUserFlavorListService =  jest.spyOn(PacUserFlavorList, "submitRequest");
 
const onSubmit = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance;


describe("PlantUserDetails Component", () => {

  beforeEach(async () => {    

    render( 
        <ReportFilterPlantUserDetails 
          name="testForm" 
          initialQuery={intialQuery}
          onSubmit={onSubmit} />  
    );  
    
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  const initTest = async () => {
  }

  it("renders correctly", async () => { 
    expect(screen.getByTestId("testForm")).toBeInTheDocument(); 
  });
 
 

  it("when user entered PlantUserDetails details and clicks on register button, PlantUserDetailsUser api should be called", async () => {
     
    await act(async () => {
      await fireEvent.click(screen.getByTestId("submit-button"));
    }); 
    
  });
});
