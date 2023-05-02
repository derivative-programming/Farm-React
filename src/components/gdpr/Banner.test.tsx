import { render, fireEvent, screen } from "@testing-library/react";
import GDPRBanner from "./Banner";
import "fake-indexeddb/auto";

describe("GDPRBanner", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should show the banner initially", () => {
    render(<GDPRBanner />);

    expect(screen.getByText(/This website uses cookies/)).toBeInTheDocument();
  });

  it("should hide the banner after accepting", () => {
    render(<GDPRBanner />);

    const acceptButton = screen.getByRole("button", { name: "Accept" });

    fireEvent.click(acceptButton);

    expect(localStorage.getItem("gdpr_accepted")).toBe("true");
    expect(
      screen.queryByText(/This website uses cookies/)
    ).not.toBeInTheDocument();
  });

  it("should hide the banner if already accepted", () => {
    localStorage.setItem("gdpr_accepted", "true");

    render(<GDPRBanner />);

    expect(
      screen.queryByText(/This website uses cookies/)
    ).not.toBeInTheDocument();
  });
});