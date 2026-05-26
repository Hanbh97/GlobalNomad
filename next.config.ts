import type { NextConfig } from "next";

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
    const fileLoaderRule = config.module.rules.find((rule: unknown) => {
      const r = rule as {
        test?: { test?: (str: string) => boolean };
        exclude?: unknown;
      };
      return r.test?.test?.(".svg");
    });

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
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
    const ruleToExclude = fileLoaderRule as { exclude?: unknown };
    ruleToExclude.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
