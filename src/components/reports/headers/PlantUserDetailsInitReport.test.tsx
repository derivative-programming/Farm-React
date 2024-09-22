import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/PlantUserDetailsInitReport";
import HeaderPlantUserDetails, {
  HeaderPlantUserDetailsProps,
} from "./PlantUserDetailsInitReport";

const TEST_ID = "test-header";
const PLANT_NAME = "Test Plant Name";
const PLANT_NAME_LABEL = "Plant Name";
const mockInitData: HeaderPlantUserDetailsProps["initData"] =
  new InitResultInstance();
mockInitData.plantName = PLANT_NAME;

const renderHeader = (props: HeaderPlantUserDetailsProps) => {
  return render(<HeaderPlantUserDetails {...props} />);
};

describe("HeaderPlantUserDetailsInitReport", () => {
  it("should render the component with the correct plant name", () => {
    renderHeader({
      name: TEST_ID,
      isHeaderVisible: true,
      initData: mockInitData,
    });

    const headerElement = screen.getByTestId(TEST_ID);

    expect(headerElement).not.toHaveAttribute("hidden");
    expect(screen.getByText(PLANT_NAME_LABEL)).toBeInTheDocument();
    expect(screen.getByText(PLANT_NAME)).toBeInTheDocument();
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
