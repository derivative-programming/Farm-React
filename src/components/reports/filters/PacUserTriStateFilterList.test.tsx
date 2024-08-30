
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ReportFilterPacUserTriStateFilterList from "./PacUserTriStateFilterList";
import * as flavorCodeService from "../../lookups/services/Flavor"
import * as ReportService from "../services/PacUserTriStateFilterList";
import "fake-indexeddb/auto";

window.localStorage.setItem("@token", "sampleToken");

const mockFlavorCodeService =  jest.spyOn(flavorCodeService, "submitRequest");

const onSubmit = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance();

describe("PacUserTriStateFilterList Component", () => {

  beforeEach(async () => {
    mockFlavorCodeService.mockResolvedValue({
        data: new flavorCodeService.QueryResultTestInstance(),
      });

    render(
        <ReportFilterPacUserTriStateFilterList
          name="testForm"
          initialQuery={intialQuery}
          onSubmit={onSubmit} />
    );

    await waitFor(() => expect(mockFlavorCodeService).toHaveBeenCalled());
  });

  // after cleanup when test-case execution is done

  const initTest = async () => {
  }

  it("renders correctly", async () => {
    expect(screen.getByTestId("testForm")).toBeInTheDocument();

  });

//endset

  it("when user entered PacUserTriStateFilterList details and clicks on register button, PacUserTriStateFilterList api should be called", async () => {

//endset

    await act(async () => {
      fireEvent.click(screen.getByTestId("submit-button"));
    });

  });
});

