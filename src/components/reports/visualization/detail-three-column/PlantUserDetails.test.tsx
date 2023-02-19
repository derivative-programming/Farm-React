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
import {ReportDetailThreeColPlantUserDetails} from "./PlantUserDetails";
import * as ReportService from "../../services/PlantUserDetails";

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
        <ReportDetailThreeColPlantUserDetails  
          item={new ReportService.QueryResultItemInstance}
          name="testName"  
          onNavigateTo={onNavigateTo} 
          />
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });
 
});
