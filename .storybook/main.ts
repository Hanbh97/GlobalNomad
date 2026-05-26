import type { StorybookConfig } from "@storybook/nextjs-vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {
      image: {
        excludeFiles: ["**/*.svg"],
      },
    },
  },
  staticDirs: ["..\\public"],
  async viteFinal(config) {
    // 스토리북이 svg를 next-image로 처리하므로 수정
    config.plugins = config.plugins || [];
    config.plugins = [
      svgr({
        svgrOptions: {
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: "**/*.svg",
      }),
      ...config.plugins,
    ];
    return config;
  },
};
export default config;
