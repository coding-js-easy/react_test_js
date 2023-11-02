import { render, screen } from "@testing-library/react";

import { Heading } from "../Heading";
import "@testing-library/jest-dom";

test("render Heading component with default variant", () => {
  render(<Heading>Text</Heading>);

  const headingElement = screen.getByText("Text");
  const role = screen.getByRole("heading");

  expect(role).not.toBeNull();
  expect(headingElement).not.toBeNull();
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveStyle("font-family: Raleway,sans-serif");
});

test("render Heading component with secondary variant", () => {
  render(<Heading variant="secondary">Text</Heading>);

  const headingElement = screen.getByText("Text");
  const role = screen.getByRole("heading");

  expect(role).not.toBeNull();
  expect(headingElement).not.toBeNull();
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveStyle("font-family: Lato,sans-serif");
});
