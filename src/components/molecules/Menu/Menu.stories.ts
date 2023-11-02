import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/molecules/Menu",
  component: Menu,
  tags: ["autodocs"],

  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Menu",
    items: [
      { id: 1, label: "Item 1", onClick: label => console.log(label) },
      { id: 2, label: "Item 2", onClick: label => console.log(label) },
    ],
  },
};
