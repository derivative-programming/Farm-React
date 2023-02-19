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
import {ReportGridPlantUserDetails} from "./PlantUserDetails";

const onRowSelect = jest.fn();
const onRowUnselect = jest.fn();
const onSelectAll = jest.fn();
const onUnselectAll = jest.fn();
const onSort = jest.fn();
const sortedColumnName = jest.fn();
const onNavigateTo = jest.fn();

describe("PlantUserDetails Form Component", () => {
  // render the PlantUserDetails Form component
  beforeEach(() => {
    render(
        <ReportGridPlantUserDetails 
          isSortDescending={true}
          items={[]}
          name="testName" 
          onRowSelect={onRowSelect}
          onRowUnselect={onRowUnselect}
          onSelectAll={onSelectAll}
          onUnselectAll={onUnselectAll}
          onSort={onSort}
          onNavigateTo={onNavigateTo}
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
