import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/LandPlantListInitReport";
import HeaderLandPlantList, {
  HeaderLandPlantListProps,
} from "./LandPlantListInitReport";

const TEST_ID = "test-header"; 
const mockInitData: HeaderLandPlantListProps["initData"] =
  new InitResultInstance(); 

const renderHeader = (props: HeaderLandPlantListProps) => {
  return render(<HeaderLandPlantList {...props} />);
};

describe("HeaderLandPlantListInitReport", () => {
  it("should render the component with the correct land name", () => {
    renderHeader({
      name: TEST_ID,
      isHeaderVisible: true,
      initData: mockInitData,
    });

    const headerElement = screen.getByTestId(TEST_ID);

    expect(headerElement).not.toHaveAttribute("hidden"); 
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