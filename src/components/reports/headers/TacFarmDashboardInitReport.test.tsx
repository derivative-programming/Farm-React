import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/TacFarmDashboardInitReport";
import HeaderTacFarmDashboard, {
  HeaderTacFarmDashboardProps,
} from "./TacFarmDashboardInitReport";

const TEST_ID = "test-header";
const TAC_NAME = "Test Tac Name";
const TAC_NAME_LABEL = "Tac Name";
const mockInitData: HeaderTacFarmDashboardProps["initData"] =
  new InitResultInstance();
mockInitData.tacName = TAC_NAME;

const renderHeader = (props: HeaderTacFarmDashboardProps) => {
  return render(<HeaderTacFarmDashboard {...props} />);
};

describe("HeaderTacFarmDashboardInitReport", () => {
  it("should render the component with the correct tac name", () => {
    renderHeader({
      name: TEST_ID,
      isHeaderVisible: true,
      initData: mockInitData,
    });

    const headerElement = screen.getByTestId(TEST_ID);

    expect(headerElement).not.toHaveAttribute("hidden");
    expect(screen.getByText(TAC_NAME_LABEL)).toBeInTheDocument();
    expect(screen.getByText(TAC_NAME)).toBeInTheDocument();
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
