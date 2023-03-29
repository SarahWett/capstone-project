import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Entry from ".";
import { BsEmojiLaughing } from "react-icons/bs";

const icon = <BsEmojiLaughing size={"2em"} color={"#252D26"} />;
const message = "";
const date = new Date().toLocaleDateString("en-us", {
  dateStyle: "medium",
});
const tags = [];
const id = "123";
const setFormData = jest.fn();
const formData = [
  {
    smiley: "awesome",
    tags: ["Family"],
    message: "FooBar",
    date: new Date().toLocaleDateString("en-us", { dateStyle: "medium" }),
    id: "123",
  },
];

test("renders smiley awesome", () => {
  render(
    <Entry
      smiley="awesome"
      icon={icon}
      message={message}
      date={date}
      tags={tags}
      id={id}
      setFormData={setFormData}
      formData={formData}
    />
  );
  const smiley = screen.getByText(/awesome/i);
  expect(smiley).toBeInTheDocument();
});

test("renders edit button", () => {
  render(
    <Entry
      smiley="awesome"
      icon={icon}
      message={message}
      date={date}
      tags={tags}
      id={id}
      setFormData={setFormData}
      formData={formData}
    />
  );
  const button = screen.getByRole("button", { name: /edit/i });
  expect(button).toBeInTheDocument();
});

test("renders delete button", () => {
  render(
    <Entry
      smiley="awesome"
      icon={icon}
      message={message}
      date={date}
      tags={tags}
      id={id}
      setFormData={setFormData}
      formData={formData}
    />
  );
  const button = screen.getByRole("button", { name: /x/i });
  expect(button).toBeInTheDocument();
});
