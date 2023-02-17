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
import ReportConnectedLandPlantList from "./LandPlantList"; 
import * as ServiceLandPlantList from "../services/LandPlantList";

// set the local storage
window.localStorage.setItem("@token", "sampleToken");

describe("LandPlantList Connected Report Component", () => {
  // render the LandPlantList component
  beforeEach(() => {
    render(
        <ReportConnectedLandPlantList />
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);

  const mockLandPlantListService = jest.spyOn(ServiceLandPlantList, "submitRequest");

  it("renders correctly", async () => {
    expect(screen.getByTestId("reportConnectedLandPlantList")).toBeInTheDocument();
  });
 
});
