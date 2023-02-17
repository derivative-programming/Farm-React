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
import ReportTableLandPlantList from "./LandPlantList";

describe("LandPlantList Form Component", () => {
  // render the LandPlantList Form component
  beforeEach(() => {
    render(
        <ReportTableLandPlantList />
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  it("renders correctly", async () => {
    expect(screen.getByTestId("reportTableLandPlantList")).toBeInTheDocument();
  });
 
});
