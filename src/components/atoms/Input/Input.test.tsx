import { render, screen, fireEvent } from "@testing-library/react";

import { Input } from "../Input";
import "@testing-library/jest-dom";

test("render Input component with Label", () => {
  render(<Input label="Name" />);

  const labelElement = screen.getByText("Name");
  const role = screen.getByRole("heading");

  expect(role).not.toBeNull();
  expect(labelElement).not.toBeNull();
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveStyle("font-family: Lato,sans-serif");
});

test("render Input component without Label", () => {
  render(<Input />);

  const labelElement = screen.queryByText("Name");
  const role = screen.queryByRole("heading");

  expect(role).toBeNull();
  expect(labelElement).toBeNull();
});

test("input element get focus when label is clicked", () => {
  render(<Input label="Name" />);

  const labelElement = screen.getByText("Name");
  const inputElement = labelElement.parentElement?.querySelector("input");
  const role = screen.getByRole("heading");

  expect(role).not.toBeNull();
  expect(labelElement).not.toBeNull();

  fireEvent.click(labelElement);
  expect(inputElement).toHaveFocus();
});

test("input element receives & update value correctly", () => {
  render(<Input label="Name" />);

  const labelElement = screen.getByText("Name");
  const inputElement = labelElement.parentElement?.querySelector("input");
  const role = screen.getByRole("heading");

  expect(role).not.toBeNull();
  expect(labelElement).not.toBeNull();
  expect(inputElement).not.toBeNull();

  fireEvent.change(inputElement!, { target: { value: "Hello World!" } });
  expect(inputElement).toHaveValue("Hello World!");
});
