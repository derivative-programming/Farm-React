
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
} from "@testing-library/react";
import {ReportDetailThreeColPacUserDateGreaterThanFilterList} from "./PacUserDateGreaterThanFilterList";
import * as ReportService from "../../services/PacUserDateGreaterThanFilterList";
import "fake-indexeddb/auto";

const onSort = jest.fn();
const sortedColumnName = jest.fn();
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();

describe("PacUserDateGreaterThanFilterList Form Component", () => {
  // render the PacUserDateGreaterThanFilterList Form component
  beforeEach(async() => {
    await act(async () => {
      render(
        <ReportDetailThreeColPacUserDateGreaterThanFilterList
          item={new ReportService.QueryResultItemInstance}
          name="testName"
          onNavigateTo={onNavigateTo}
          onRefreshRequest={onRefreshRequest}
          />
      )
    });
  });

  // after cleanup when test-case execution is done

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });

});

