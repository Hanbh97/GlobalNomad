// 스토리북으로 테스트 - Button 컴포넌트

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/Button",
};

export default meta;
type storybook = StoryObj<typeof Button>;

export const defaultButton_primary_lg: storybook = {
  args: {
    variant: "primary",
    size: "lg",
    children: "primary버튼 lg",
  },
};

export const defaultButton_primary_md: storybook = {
  args: {
    variant: "primary",
    size: "md",
    children: "primary버튼 md",
  },
};

export const defaultButton_primary_sm: storybook = {
  args: {
    variant: "primary",
    size: "sm",
    children: "primary버튼 sm",
  },
};

export const loginButton_secondary_lg: storybook = {
  args: {
    variant: "secondary",
    size: "lg",
    children: "secondary버튼 lg",
  },
};

export const loginButton_secondary_md: storybook = {
  args: {
    variant: "secondary",
    size: "md",
    children: "secondary버튼 md",
  },
};

export const loginButton_secondary_sm: storybook = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "secondary버튼 sm",
  },
};

export const userButton_text_lg: storybook = {
  args: {
    variant: "text",
    size: "lg",
    children: "text버튼 lg",
  },
};

export const userButton_text_md: storybook = {
  args: {
    variant: "text",
    size: "md",
    children: "text버튼 md",
  },
};

export const userButton_text_sm: storybook = {
  args: {
    variant: "text",
    size: "sm",
    children: "text버튼 sm",
  },
};
