// Button 컴포넌트 storybook

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "@/components/common/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/common - Button",
};

export default meta;
type storybook = StoryObj<typeof Button>;

export const Primary_lg: storybook = {
  args: {
    variant: "primary",
    size: "lg",
    children: "텍스트만 (default)",
  },
};

export const Primary_md: storybook = {
  args: {
    variant: "primary",
    size: "md",
    children: "텍스트만 (default)",
  },
};

export const Primary_sm: storybook = {
  args: {
    variant: "primary",
    size: "sm",
    children: "텍스트만 (default)",
  },
};

export const Secondary_lg: storybook = {
  args: {
    variant: "secondary",
    size: "lg",
    children: "카카오/구글 아이콘 + 텍스트 (간편로그인)",
  },
};

export const Secondary_md: storybook = {
  args: {
    variant: "secondary",
    size: "md",
    children: "카카오/구글 아이콘 + 텍스트 (간편로그인)",
  },
};

export const Secondary_sm: storybook = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "카카오/구글 아이콘 + 텍스트 (간편로그인)",
  },
};

export const Text_lg: storybook = {
  args: {
    variant: "text",
    size: "lg",
    children: "유저 아이콘 + 텍스트",
  },
};

export const Text_md: storybook = {
  args: {
    variant: "text",
    size: "md",
    children: "유저 아이콘 + 텍스트",
  },
};

export const Text_sm: storybook = {
  args: {
    variant: "text",
    size: "sm",
    children: "유저 아이콘 + 텍스트",
  },
};
