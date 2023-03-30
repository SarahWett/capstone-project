import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Entry from ".";

test("renders smiley awesome", () => {
  render(<Entry smiley="awesome" />);
  const smiley = screen.getByText(/awesome/i);
  expect(smiley).toBeInTheDocument();
});

test("renders edit button", () => {
  render(<Entry />);
  const button = screen.getByRole("button", { name: /edit/i });
  expect(button).toBeInTheDocument();
});

test("renders delete button", () => {
  render(<Entry />);
  const button = screen.getByRole("button", { name: /x/i });
  expect(button).toBeInTheDocument();
});
