import "@testing-library/jest-dom";
import { getByRole, render } from "@testing-library/react";
import Navbar from ".";

test("Navbar", async () => {
  render(
    <Navbar>
      <li>Foo</li>
    </Navbar>
  );
  const navbar = await getByRole(document.body, "list");
  expect(navbar).toBeInTheDocument();
});
