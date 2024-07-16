
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
  act,
} from "@testing-library/react";
import {ReportGridPacUserDateGreaterThanFilterList} from "./PacUserDateGreaterThanFilterList";
import "fake-indexeddb/auto";

const onSort = jest.fn();
const onExport = jest.fn();
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();
const onPageSelection = jest.fn();
const onPageSizeChange = jest.fn();

describe("PacUserDateGreaterThanFilterList Form Component", () => {
  // render the PacUserDateGreaterThanFilterList Form component
  beforeEach(async() => {
    await act(async () => {
      render(
        <ReportGridPacUserDateGreaterThanFilterList
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

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });

});

