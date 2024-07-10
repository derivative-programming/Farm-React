
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  
  screen,
} from "@testing-library/react";
import {ReportDetailTwoColLandPlantList} from "./LandPlantList";
import * as ReportService from "../../services/LandPlantList";
import "fake-indexeddb/auto";

const onSort = jest.fn();
const sortedColumnName = jest.fn();
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();

describe("LandPlantList Form Component", () => {
  // render the LandPlantList Form component
  beforeEach(() => {
    render(
        <ReportDetailTwoColLandPlantList  
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
