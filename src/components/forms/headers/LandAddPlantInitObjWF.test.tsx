import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/LandAddPlantInitObjWF";
import HeaderLandAddPlant, {
  HeaderLandAddPlantProps,
} from "./LandAddPlantInitObjWF";

const TEST_ID = "test-header";
const LAND_NAME = "Test Land Name";
const LAND_NAME_LABEL = "Land Name";
const mockInitData: HeaderLandAddPlantProps["initData"] =
  new InitResultInstance();
mockInitData.landName = LAND_NAME;

const renderHeader = (props: HeaderLandAddPlantProps) => {
  return render(<HeaderLandAddPlant {...props} />);
};

describe("HeaderLandAddPlant", () => {
  it("should render the component with the correct land name", () => {
    renderHeader({
      name: TEST_ID,
      isHeaderVisible: true,
      initData: mockInitData,
    });

    const headerElement = screen.getByTestId(TEST_ID);

    expect(headerElement).not.toHaveAttribute("hidden");
    expect(screen.getByText(LAND_NAME_LABEL)).toBeInTheDocument();
    expect(screen.getByText(LAND_NAME)).toBeInTheDocument();
  });

  it("should be hidden elements when isHeaderVisible is false", () => {
    renderHeader({
      name: TEST_ID,
      isHeaderVisible: false,
      initData: mockInitData,
    });

    const headerElement = screen.getByTestId(TEST_ID);

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveAttribute("hidden");
  });
});