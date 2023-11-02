import type { Meta, StoryObj } from "@storybook/react";

import { ExpandableWindow } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/molecules/Expandable Window",
  component: ExpandableWindow,
  tags: ["autodocs"],

  argTypes: {
    title: { control: "text" },
    isExpandable: { control: "boolean", defaultValue: "true" },
  },
} satisfies Meta<typeof ExpandableWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Expandable Window",
    children: <div style={{ background: "#f2f2f2", padding: 20 }}>Children</div>,
  },
};
