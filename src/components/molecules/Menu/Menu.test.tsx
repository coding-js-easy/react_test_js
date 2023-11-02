import { render, fireEvent, waitFor } from "@testing-library/react";

import { Menu } from "./index";
import "@testing-library/jest-dom";

test("render Menu component with Label & Items", () => {
  const items = [
    { id: 1, label: "Option 1", onClick: jest.fn() },
    { id: 2, label: "Option 2", onClick: jest.fn() },
  ];

  const MenuElement = render(<Menu items={items} label="Menu Label" />);

  const labelElement = MenuElement.getByText("Menu Label");
  const menuButton = MenuElement.getByRole("button", { name: "Menu Label" });

  expect(labelElement).toBeInTheDocument();
  expect(menuButton).toBeInTheDocument();

  items.forEach(item => {
    const menuItem = MenuElement.getByText(item.label);
    expect(menuItem).toBeInTheDocument();
  });
});

test("opens and closes menu on button click", async () => {
  const items = [
    { id: 1, label: "Option 1", onClick: jest.fn() },
    { id: 2, label: "Option 2", onClick: jest.fn() },
  ];

  const MenuElement = render(<Menu items={items} label="Menu Label" />);

  const menuButton = MenuElement.getByRole("button", { name: "Menu Label" });
  fireEvent.click(menuButton);

  await waitFor(() => {
    const menuList = MenuElement.queryByRole("menu");
    expect(menuList).not.toBeNull();
  });

  fireEvent.click(menuButton);

  await waitFor(() => {
    const closedMenuList = MenuElement.queryByRole("menu");
    expect(closedMenuList).toBeNull();
  });
});

test("calls onClick when a menu item is clicked", () => {
  const items = [
    { id: 1, label: "Option 1", onClick: jest.fn() },
    { id: 2, label: "Option 2", onClick: jest.fn() },
  ];

  const MenuElement = render(<Menu items={items} label="Menu Label" />);

  items.forEach(item => {
    const menuItem = MenuElement.getByText(item.label);
    expect(menuItem).toBeInTheDocument();

    fireEvent.click(menuItem);

    expect(item.onClick).toHaveBeenCalledWith(item.label);
  });
});
