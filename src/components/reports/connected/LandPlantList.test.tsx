/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act, 
} from "@testing-library/react";
import ReportConnectedLandPlantList from "./LandPlantList"; 
import * as ReportService from "../services/LandPlantList";
import * as InitReportService from "../services/init/LandPlantListInitReport";
import { BrowserRouter } from "react-router-dom";
import * as flavorCodeService from "../../lookups/services/Flavor"
import "fake-indexeddb/auto";
 
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockUserParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockUserParams.mockReturnValue({ id: "00000000-0000-0000-0000-000000000000",}),
}));

const mockReportInitService = jest.spyOn(ReportService, "initPage");
const mockReportService = jest.spyOn(ReportService, "submitRequest");
const mockFlavorCodeService =  jest.spyOn(flavorCodeService, "submitRequest");

describe("LandPlantList Connected Report Component", () => {
  // render the LandPlantList component
  beforeEach(async() => {
    mockReportInitService.mockResolvedValue({
      data: new InitReportService.InitResultInstance(),
    });

    mockFlavorCodeService.mockResolvedValue({
      data: new flavorCodeService.QueryResultTestInstance(),
    }); 
    
    mockReportService.mockResolvedValue({
      data: new ReportService.QueryResultInstance(),
    }); 

    await act(async () => {
      render(
        <BrowserRouter>
          <ReportConnectedLandPlantList />
        </BrowserRouter>
      
      )
    });
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);


  it("renders correctly", async () => {
    
    expect(screen.getByTestId("reportConnectedLandPlantList")).toBeInTheDocument();
       
    expect(screen.getByTestId("tacFarmDashboardBreadcrumb")).toBeInTheDocument();

    expect(screen.getByTestId("back-button")).toBeInTheDocument(); 

    if("Plant List".length > 0){
      expect(screen.getByTestId("page-title-text")).toBeInTheDocument();
      expect(screen.getByTestId("page-title-text"))
        .toHaveTextContent("Plant List");
    }
    if("A list of plants on the land".length > 0){ 
      expect(screen.getByTestId("page-intro-text")).toBeInTheDocument();
      expect(screen.getByTestId("page-intro-text"))
        .toHaveTextContent("A list of plants on the land");
    }

  });
 
});
