
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ReportFilterPacUserTacList from "./PacUserTacList";

import * as ReportService from "../services/PacUserTacList";
import "fake-indexeddb/auto";

window.localStorage.setItem("@token", "sampleToken");

const onSubmit = jest.fn();
const onFilerReset = jest.fn();

const intialQuery:ReportService.QueryRequest = new ReportService.QueryRequestInstance();

describe("PacUserTacList Component", () => {

  beforeEach(async () => {

  });

  // after cleanup when test-case execution is done

  const initTest = async () => {
  }

  it("renders correctly", async () => {
    expect(screen.getByTestId("testForm")).toBeInTheDocument();

  });

//endset

  it("when user entered PacUserTacList details and clicks on register button, PacUserTacList api should be called", async () => {

//endset

    await act(async () => {
      fireEvent.click(screen.getByTestId("submit-button"));
    });

  });
});

