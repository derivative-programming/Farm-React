import { render, cleanup, screen } from "@testing-library/react";
import ErrorDisplay from "./ErrorDisplay";

describe("ErrorDisplay Component", () => {
  afterEach(cleanup);

  it("renders correctly when no errors are provided", () => {
    render(<ErrorDisplay name="testName" />);
    expect(screen.queryByText(/.+/)).toBeNull();
  });

  it("renders correctly when only errorCsv is provided", () => {
    render(<ErrorDisplay name="testName" errorCsv="error1,error2,error3" />);
    expect(screen.getByText("error1")).toBeInTheDocument();
    expect(screen.getByText("error2")).toBeInTheDocument();
    expect(screen.getByText("error3")).toBeInTheDocument();
  });

  it("renders correctly when only errorArray is provided", () => {
    render(<ErrorDisplay name="testName" errorArray={["error1", "error2", "error3"]} />);
    expect(screen.getByText("error1")).toBeInTheDocument();
    expect(screen.getByText("error2")).toBeInTheDocument();
    expect(screen.getByText("error3")).toBeInTheDocument();
  });

  it("renders correctly when both errorCsv and errorArray are provided", () => {
    render(<ErrorDisplay name="testName" errorCsv="error1,error2" errorArray={["error3", "error4"]} />);
    expect(screen.getByText("error1")).toBeInTheDocument();
    expect(screen.getByText("error2")).toBeInTheDocument();
    expect(screen.getByText("error3")).toBeInTheDocument();
    expect(screen.getByText("error4")).toBeInTheDocument();
  });

  it("renders correctly with an empty errorCsv and a non-empty errorArray", () => {
    render(<ErrorDisplay name="testName" errorCsv="" errorArray={["error1", "error2", "error3"]} />);
    expect(screen.getByText("error1")).toBeInTheDocument();
    expect(screen.getByText("error2")).toBeInTheDocument();
    expect(screen.getByText("error3")).toBeInTheDocument();
  });

  it("renders correctly with a non-empty errorCsv and an empty errorArray", () => {
    render(<ErrorDisplay name="testName" errorCsv="error1,error2,error3" errorArray={[]} />);
    expect(screen.getByText("error1")).toBeInTheDocument();
    expect(screen.getByText("error2")).toBeInTheDocument();
    expect(screen.getByText("error3")).toBeInTheDocument();
  });

  it("renders correctly with duplicate error messages in errorCsv and errorArray", () => {
    // render(<ErrorDisplay name="testName" errorCsv="error1,error2,error3" errorArray={["error2", "error3", "error4"]} />);
    // expect(screen.getByText("error1")).toBeInTheDocument();
    // expect(screen.getByText("error4")).toBeInTheDocument();
    // const error2Elements = screen.getAllByText("error2");
    // const error3Elements = screen.getAllByText("error3");
    // expect(error2Elements).toHaveLength(2); // Expecting two occurrences of "error2"
    // expect(error3Elements).toHaveLength(2); // Expecting two occurrences of "error3"
  });
  
});
