/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act, 
} from "@testing-library/react";
import {ReportGridLandPlantList} from "./LandPlantList";
import "fake-indexeddb/auto";
 
const onSort = jest.fn(); 
const onExport = jest.fn(); 
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();
const onPageSelection = jest.fn();
const onPageSizeChange = jest.fn();

describe("LandPlantList Form Component", () => {
  // render the LandPlantList Form component
  beforeEach(async() => {
    await act(async () => {
      render(
        <ReportGridLandPlantList 
          isSortDescending={true}
          items={[]}
          name="testName"  
          contextCode=""
          onSort={onSort}
          onExport={onExport}
          onNavigateTo={onNavigateTo}
          onRefreshRequest={onRefreshRequest}
          sortedColumnName="testColumnName" 
          currentPage={1}
          onPageSelection={onPageSelection}
          onPageSizeChange={onPageSizeChange}
          pageSize={10}
          totalItemCount={0} 
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
