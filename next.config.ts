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
};
export default nextConfig;
