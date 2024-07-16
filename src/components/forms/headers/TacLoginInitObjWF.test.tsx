import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/TacLoginInitObjWF";
import HeaderTacLogin, {
  HeaderTacLoginProps,
} from "./TacLoginInitObjWF";

const TEST_ID = "test-header";

const mockInitData: HeaderTacLoginProps["initData"] =
  new InitResultInstance();

const renderHeader = (props: HeaderTacLoginProps) => {
  return render(<HeaderTacLogin {...props} />);
};

describe("HeaderTacLoginIntObjWF", () => {
  it("should render the component with the correct tac name", () => {
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

