
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import {ReportDetailTwoColTacFarmDashboard} from "./TacFarmDashboard";
import * as ReportService from "../../services/TacFarmDashboard";
import "fake-indexeddb/auto";

const onSort = jest.fn();
const sortedColumnName = jest.fn();
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();

describe("TacFarmDashboard Form Component", () => {
  // render the TacFarmDashboard Form component
  beforeEach(() => {
    render(
        <ReportDetailTwoColTacFarmDashboard  
          item={new ReportService.QueryResultItemInstance}
          name="testName"  
          onNavigateTo={onNavigateTo} 
          onRefreshRequest={onRefreshRequest}
          />
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });
 
});
