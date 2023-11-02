import { render, screen } from "@testing-library/react";

import { Text } from "../Text";
import "@testing-library/jest-dom";

test("render Text component", () => {
  render(<Text>Text</Text>);

  const textElement = screen.getByText("Text");

  expect(textElement).not.toBeNull();
  expect(textElement).toBeInTheDocument();
  expect(textElement).toHaveStyle("font-family: Open Sans,sans-serif");
});
