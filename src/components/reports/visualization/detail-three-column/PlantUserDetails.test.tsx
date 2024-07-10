
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
  act,
} from "@testing-library/react";
import {ReportDetailThreeColPlantUserDetails} from "./PlantUserDetails";
import * as ReportService from "../../services/PlantUserDetails";
import "fake-indexeddb/auto";

const onSort = jest.fn();
const sortedColumnName = jest.fn();
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();

describe("PlantUserDetails Form Component", () => {
  // render the PlantUserDetails Form component
  beforeEach(async() => {
    await act(async () => {
      render(
        <ReportDetailThreeColPlantUserDetails  
          item={new ReportService.QueryResultItemInstance}
          name="testName"  
          onNavigateTo={onNavigateTo} 
          onRefreshRequest={onRefreshRequest}
          />
      )
    });
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });
 
});
