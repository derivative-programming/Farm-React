/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import {ReportGridLandPlantList} from "./LandPlantList";

const onRowSelect = jest.fn();
const onRowUnselect = jest.fn();
const onSelectAll = jest.fn();
const onUnselectAll = jest.fn();
const onSort = jest.fn();
const sortedColumnName = jest.fn();
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();
const onPageSelection = jest.fn();
const onPageSizeChange = jest.fn();

describe("LandPlantList Form Component", () => {
  // render the LandPlantList Form component
  beforeEach(() => {
    render(
        <ReportGridLandPlantList 
          isSortDescending={true}
          items={[]}
          name="testName"  
          contextCode=""
          onSort={onSort}
          onNavigateTo={onNavigateTo}
          onRefreshRequest={onRefreshRequest}
          sortedColumnName="testColumnName" 
          currentPage={1}
          onPageSelection={onPageSelection}
          onPageSizeChange={onPageSizeChange}
          pageSize={10}
          totalItemCount={0} 
          />
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });
 
});
