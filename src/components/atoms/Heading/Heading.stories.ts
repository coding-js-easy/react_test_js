import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/atoms/Heading",
  component: Heading,
  tags: ["autodocs"],

  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary"] },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Custom Heading Component",
  },
};

export const Primary: Story = {
  args: {
    children: "Custom Heading Component",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Custom Heading Component",
    variant: "secondary",
  },
};
