import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              replaceAttrValues: {
                black: "currentColor",
                "#000": "currentColor",
                "#1F1F22": "currentColor",
                "#707177": "currentColor",
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule) =>
        typeof rule !== "string" &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg"),
    ) as RuleSetRule | undefined;

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer,
        resourceQuery: { not: [/url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              replaceAttrValues: {
                black: "currentColor",
                "#000": "currentColor",
                "#1F1F22": "currentColor",
                "#707177": "currentColor",
              },
            },
          },
        ],
      },
    );

    if (!fileLoaderRule) {
      return config;
    }

    fileLoaderRule.exclude = /\.svg$/i;
  },
};
export default nextConfig;
