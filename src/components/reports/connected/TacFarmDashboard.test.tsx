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
import ReportConnectedTacFarmDashboard from "./TacFarmDashboard";
import * as ReportService from "../services/TacFarmDashboard";
import * as InitReportService from "../services/init/TacFarmDashboardInitReport";
import { BrowserRouter } from "react-router-dom"; 
import "fake-indexeddb/auto";
 
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockUserParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockUserParams.mockReturnValue({ id: "00000000-0000-0000-0000-000000000000", }),
}));

const mockReportInitService = jest.spyOn(ReportService, "initPage");
const mockReportService = jest.spyOn(ReportService, "submitRequest"); 

describe("TacFarmDashboard Connected Report Component", () => {
  // render the TacFarmDashboard component
  beforeEach(() => {
    mockReportInitService.mockResolvedValue({
      data: new InitReportService.InitResultInstance(),
    }); 

    mockReportService.mockResolvedValue({
      data: new ReportService.QueryResultTestInstance(),
    });

    render(
      <BrowserRouter>
        <ReportConnectedTacFarmDashboard />
      </BrowserRouter>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);


  it("renders correctly", async () => {
    expect(screen.getByTestId("reportConnectedTacFarmDashboard")).toBeInTheDocument();
  });

});
