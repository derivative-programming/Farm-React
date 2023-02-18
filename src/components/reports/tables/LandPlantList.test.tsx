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
import {ReportTableLandPlantList} from "./LandPlantList";

const onRowSelect = jest.fn();
const onRowUnselect = jest.fn();
const onSelectAll = jest.fn();
const onSort = jest.fn();
const sortedColumnName = jest.fn();

describe("LandPlantList Form Component", () => {
  // render the LandPlantList Form component
  beforeEach(() => {
    render(
        <ReportTableLandPlantList 
          isSortDescending={true}
          items={[]}
          name="testName" 
          onRowSelect={onRowSelect}
          onRowUnselect={onRowUnselect}
          onSelectAll={onSelectAll}
          onSort={onSort}
          sortedColumnName="testColumnName" 
          />
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });
 
});
