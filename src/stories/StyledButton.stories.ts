import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import StyledButton from "./StyledButton";

const meta = {
  title: "Test/StyledButton",
  component: StyledButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isPrimary: { control: "boolean" },
    isDisabled: { control: "boolean" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    onClick: fn(),
    label: "Styled Button",
  },
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isPrimary: true,
    label: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
  },
};

export const Large: Story = {
  args: {
    isPrimary: true,
    size: "large",
    label: "Large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small",
  },
};

export const Disabled: Story = {
  args: {
    isPrimary: true,
    isDisabled: true,
    label: "Disabled",
  },
};
