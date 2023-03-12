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
import ReportConnectedLandPlantList from "./LandPlantList"; 
import * as ReportService from "../services/LandPlantList";
import * as InitReportService from "../services/LandPlantListInitReport";
import { BrowserRouter } from "react-router-dom";
import * as flavorCodeService from "../../lookups/services/PacUserFlavorList"
 
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockUserParams = jest.fn();

const isRefreshButtonHidden = false;
const isPagingAvailable = true;
const isExportButtonsHidden = false;
const isFilterSectionHidden = false;
const isFilterSectionCollapsable = true;
const isBreadcrumbSectionHidden = false;
const isButtonDropDownAllowed = false; 

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
  beforeEach(() => {
    mockReportInitService.mockResolvedValueOnce({
      data: new InitReportService.InitResultInstance,
    });

    mockFlavorCodeService.mockResolvedValueOnce({
      data: new flavorCodeService.QueryResultTestInstance,
    }); 
    
    mockReportService.mockResolvedValue({
      data: new ReportService.QueryResultInstance,
    }); 

    render(
      <BrowserRouter>
        <ReportConnectedLandPlantList />
      </BrowserRouter>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);


  it("renders correctly", async () => {
    expect(screen.getByTestId("reportConnectedLandPlantList")).toBeInTheDocument();
    
    if("Plant List title text".length > 0){
      expect(screen.getByText("Plant List title text")).toBeInTheDocument();
    }
    if("A list of plants on the land".length > 0){
      expect(screen.getByText("A list of plants on the land")).toBeInTheDocument();
    }
  });
 
});
