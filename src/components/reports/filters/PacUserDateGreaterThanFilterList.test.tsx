
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ReportFilterPacUserDateGreaterThanFilterList from "./PacUserDateGreaterThanFilterList";

import * as ReportService from "../services/PacUserDateGreaterThanFilterList";
import "fake-indexeddb/auto";

window.localStorage.setItem("@token", "sampleToken");

const onSubmit = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance();

describe("PacUserDateGreaterThanFilterList Component", () => {

  beforeEach(async () => {

    render(
        <ReportFilterPacUserDateGreaterThanFilterList
          name="testForm"
          initialQuery={intialQuery}
          onSubmit={onSubmit} />
    );

  });

  // after cleanup when test-case execution is done

  const initTest = async () => {
  }

  it("renders correctly", async () => {
    expect(screen.getByTestId("testForm")).toBeInTheDocument();

  });

  it("when user entered PacUserDateGreaterThanFilterList details and clicks on register button, PacUserDateGreaterThanFilterList api should be called", async () => {

    await act(async () => {
      fireEvent.click(screen.getByTestId("submit-button"));
    });

  });
});

