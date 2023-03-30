import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";
import BackButton from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("BackButton component", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      back: jest.fn(),
    });
  });

  it("renders the back button", () => {
    render(<BackButton />);
    const backButtonIcon = screen.getByRole("button");
    expect(backButtonIcon).toBeInTheDocument();
  });

  it("calls router.back() when the button is clicked", () => {
    render(<BackButton />);
    const backButton = screen.getByRole("button");
    fireEvent.click(backButton);
    expect(useRouter().back).toHaveBeenCalledTimes(1);
  });
});
