import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/PacUserRoleListInitReport";
import HeaderPacUserRoleList, {
  HeaderPacUserRoleListProps,
} from "./PacUserRoleListInitReport";

const TEST_ID = "test-header";

const mockInitData: HeaderPacUserRoleListProps["initData"] =
  new InitResultInstance();

const renderHeader = (props: HeaderPacUserRoleListProps) => {
  return render(<HeaderPacUserRoleList {...props} />);
};

describe("HeaderPacUserRoleListInitReport", () => {
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
