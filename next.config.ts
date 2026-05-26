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
      const typedRule = rule as {
        test?: { test?: (str: string) => boolean };
        exclude?: unknown;
      };
      return typedRule.test?.test?.(".svg");
    });

    // [추가] undefined 반환으로 인한 조기 리턴 방지
    if (!fileLoaderRule) {
      return config;
    }

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
                "#3891dd": "currentColor",
                "#3c1e1e": "currentColor", // 카카오 간편로그인 normal 색
                "#efd118": "currentColor", // 카카오 간편로그인 active 색
                "#012155": "currentColor", // 카카오 간편로그인 active 색
                "#84858c": "currentColor", // 카카오 간편로그인 disabled 색
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
