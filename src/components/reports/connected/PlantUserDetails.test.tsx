
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
} from "@testing-library/react";
import ReportConnectedPlantUserDetails from "./PlantUserDetails";
import * as ReportService from "../services/PlantUserDetails";
import * as InitReportService from "../services/init/PlantUserDetailsInitReport";
import { BrowserRouter } from "react-router-dom";

import "fake-indexeddb/auto";

window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockUserParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockUserParams.mockReturnValue({ id: "00000000-0000-0000-0000-000000000000",}),
}));

const mockReportInitService = jest.spyOn(ReportService, "initPage");
const mockReportService = jest.spyOn(ReportService, "submitRequest");

describe("PlantUserDetails Connected Report Component", () => {
  // render the PlantUserDetails component
  beforeEach(async() => {
    mockReportInitService.mockResolvedValue({
      data: new InitReportService.InitResultInstance(),
    });

    mockReportService.mockResolvedValue({
      data: new ReportService.QueryResultInstance(),
    });

    await act(async () => {
      render(
        <BrowserRouter>
          <ReportConnectedPlantUserDetails />
        </BrowserRouter>

      )
    });
  });

  // after cleanup when test-case execution is done

  it("renders correctly", async () => {

    expect(screen.getByTestId("reportConnectedPlantUserDetails")).toBeInTheDocument();
    expect(screen.getByTestId("tacFarmDashboardBreadcrumb")).toBeInTheDocument();
    expect(screen.getByTestId("landPlantListBreadcrumb")).toBeInTheDocument();
    expect(screen.getByTestId("back-button")).toBeInTheDocument();
    if("Plant Details".length > 0){
      expect(screen.getByTestId("page-title-text")).toBeInTheDocument();
      expect(screen.getByTestId("page-title-text"))
        .toHaveTextContent("Plant Details");
    }
    if("Plant Details page intro text".length > 0){
      expect(screen.getByTestId("page-intro-text")).toBeInTheDocument();
      expect(screen.getByTestId("page-intro-text"))
        .toHaveTextContent("Plant Details page intro text");
    }

  });

});

