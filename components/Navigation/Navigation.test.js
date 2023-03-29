import "@testing-library/jest-dom";
import { getByRole, render } from "@testing-library/react";
import Navbar from ".";

const children = <li>Foo</li>;

test("Navbar", async () => {
  // wait for component to render
  render(<Navbar>{children}</Navbar>);
  const navbar = await getByRole(document.body, "list"); // pass document.body as container parameter
  expect(navbar).toBeInTheDocument();
});
