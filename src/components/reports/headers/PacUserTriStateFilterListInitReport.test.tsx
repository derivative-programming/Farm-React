import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/PacUserTriStateFilterListInitReport";
import HeaderPacUserTriStateFilterList, {
  HeaderPacUserTriStateFilterListProps,
} from "./PacUserTriStateFilterListInitReport";

const TEST_ID = "test-header";
const PAC_NAME = "Test Pac Name";
const PAC_NAME_LABEL = "Pac Name";
const mockInitData: HeaderPacUserTriStateFilterListProps["initData"] =
  new InitResultInstance();
mockInitData.pacName = PAC_NAME;

const renderHeader = (props: HeaderPacUserTriStateFilterListProps) => {
  return render(<HeaderPacUserTriStateFilterList {...props} />);
};

describe("HeaderPacUserTriStateFilterListInitReport", () => {
  it("should render the component with the correct pac name", () => {
    renderHeader({
      name: TEST_ID,
      isHeaderVisible: true,
      initData: mockInitData,
    });

    const headerElement = screen.getByTestId(TEST_ID);

    expect(headerElement).not.toHaveAttribute("hidden");
    expect(screen.getByText(PAC_NAME_LABEL)).toBeInTheDocument();
    expect(screen.getByText(PAC_NAME)).toBeInTheDocument();
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
