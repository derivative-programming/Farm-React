import { render, screen } from "@testing-library/react";

import { InitResultInstance } from "../services/init/CustomerUserLogOutInitObjWF";
import HeaderCustomerUserLogOut, {
  HeaderCustomerUserLogOutProps,
} from "./CustomerUserLogOutInitObjWF";

const TEST_ID = "test-header";
const CUSTOMER_NAME = "Test Customer Name";
const CUSTOMER_NAME_LABEL = "Customer Name";
const mockInitData: HeaderCustomerUserLogOutProps["initData"] =
  new InitResultInstance();
mockInitData.customerName = CUSTOMER_NAME;

const renderHeader = (props: HeaderCustomerUserLogOutProps) => {
  return render(<HeaderCustomerUserLogOut {...props} />);
};

describe("HeaderCustomerUserLogOutIntObjWF", () => {
  it("should render the component with the correct customer name", () => {
    renderHeader({
      name: TEST_ID,
      isHeaderVisible: true,
      initData: mockInitData,
    });

    const headerElement = screen.getByTestId(TEST_ID);

    expect(headerElement).not.toHaveAttribute("hidden");
    expect(screen.getByText(CUSTOMER_NAME_LABEL)).toBeInTheDocument();
    expect(screen.getByText(CUSTOMER_NAME)).toBeInTheDocument();
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
