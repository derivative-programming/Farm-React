
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
} from "@testing-library/react";
import {ReportDetailThreeColTacFarmDashboard} from "./TacFarmDashboard";
import * as ReportService from "../../services/TacFarmDashboard";
import "fake-indexeddb/auto";

const onSort = jest.fn();
const sortedColumnName = jest.fn();
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();

describe("TacFarmDashboard Form Component", () => {
  // render the TacFarmDashboard Form component
  beforeEach(async() => {
    await act(async () => {
      render(
        <ReportDetailThreeColTacFarmDashboard
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

