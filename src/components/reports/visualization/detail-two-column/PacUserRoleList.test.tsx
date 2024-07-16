
/* eslint-disable testing-library/no-render-in-lifecycle */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,

  screen,
} from "@testing-library/react";
import {ReportDetailTwoColPacUserRoleList} from "./PacUserRoleList";
import * as ReportService from "../../services/PacUserRoleList";
import "fake-indexeddb/auto";

const onSort = jest.fn();
const sortedColumnName = jest.fn();
const onNavigateTo = jest.fn();
const onRefreshRequest = jest.fn();

describe("PacUserRoleList Form Component", () => {
  // render the PacUserRoleList Form component
  beforeEach(() => {
    render(
        <ReportDetailTwoColPacUserRoleList
          item={new ReportService.QueryResultItemInstance}
          name="testName"
          onNavigateTo={onNavigateTo}
          onRefreshRequest={onRefreshRequest}
          />
    );
  });

  // after cleanup when test-case execution is done

  it("renders correctly", async () => {
    expect(screen.getByTestId("testName")).toBeInTheDocument();
  });

});

