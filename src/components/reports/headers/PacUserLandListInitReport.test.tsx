import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/PacUserLandListInitReport";
import HeaderPacUserLandList, {
  HeaderPacUserLandListProps,
} from "./PacUserLandListInitReport";

const TEST_ID = "test-header";

const mockInitData: HeaderPacUserLandListProps["initData"] =
  new InitResultInstance();

const renderHeader = (props: HeaderPacUserLandListProps) => {
  return render(<HeaderPacUserLandList {...props} />);
};

describe("HeaderPacUserLandListInitReport", () => {
  it("should render the component with the correct pac name", () => {
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

