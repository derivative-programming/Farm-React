
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ReportFilterPacUserLandList from "./PacUserLandList";

import * as ReportService from "../services/PacUserLandList";
import "fake-indexeddb/auto";

window.localStorage.setItem("@token", "sampleToken");

const onSubmit = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance();

describe("PacUserLandList Component", () => {

  beforeEach(async () => {

    render(
        <ReportFilterPacUserLandList
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

  it("when user entered PacUserLandList details and clicks on register button, PacUserLandList api should be called", async () => {

    await act(async () => {
      fireEvent.click(screen.getByTestId("submit-button"));
    });

  });
});

