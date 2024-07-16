
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
} from "@testing-library/react";
import ReportConnectedPacUserDateGreaterThanFilterList from "./PacUserDateGreaterThanFilterList";
import * as ReportService from "../services/PacUserDateGreaterThanFilterList";
import * as InitReportService from "../services/init/PacUserDateGreaterThanFilterListInitReport";
import { BrowserRouter } from "react-router-dom";

import "fake-indexeddb/auto";

window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockParams.mockReturnValue({ id: "00000000-0000-0000-0000-000000000000",}),
}));

const mockReportInitService = jest.spyOn(ReportService, "initPage");
const mockReportService = jest.spyOn(ReportService, "submitRequest");

describe("PacUserDateGreaterThanFilterList Connected Report Component", () => {
  // render the PacUserDateGreaterThanFilterList component
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
          <ReportConnectedPacUserDateGreaterThanFilterList />
        </BrowserRouter>

      )
    });
  });

  // after cleanup when test-case execution is done

  it("renders correctly", async () => {

    expect(screen.getByTestId("reportConnectedPacUserDateGreaterThanFilterList")).toBeInTheDocument();

    if("Pac User Date Greater Than Filter List Report".length > 0){
      expect(screen.getByTestId("page-title-text")).toBeInTheDocument();
      expect(screen.getByTestId("page-title-text"))
        .toHaveTextContent("Pac User Date Greater Than Filter List Report");
    }
    if("".length > 0){
      expect(screen.getByTestId("page-intro-text")).toBeInTheDocument();
      expect(screen.getByTestId("page-intro-text"))
        .toHaveTextContent("");
    }

  });

});

