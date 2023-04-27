import React from "react";
import { render, fireEvent, waitFor  } from "@testing-library/react";
import Banner from "./Banner";

describe("GDPRBanner", () => {
  it("should render the banner", () => {
    const { getByText } = render(<Banner />);
    const bannerText = getByText(
      /This website uses cookies to improve your experience/i
    );
    expect(bannerText).toBeInTheDocument();
  });
});