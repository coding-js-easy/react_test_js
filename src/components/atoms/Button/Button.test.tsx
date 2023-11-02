import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "../Button";
import "@testing-library/jest-dom";

test("render Button with Label", () => {
  render(<Button>Text</Button>);

  const buttonElement = screen.getByText("Text");
  const role = screen.getByRole("button");

  expect(role).not.toBeNull();
  expect(buttonElement).not.toBeNull();
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick prop when button is clicked", () => {
  const handler = jest.fn(() => {});

  render(<Button onClick={handler}>Text</Button>);

  const button = screen.getByText("Text");
  fireEvent.click(button);

  expect(handler).toHaveBeenCalled();
  expect(handler).toHaveBeenCalledTimes(1);
});
