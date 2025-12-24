import type { NextConfig } from "next";

const repo = "sciunit";

const nextConfig: NextConfig = {
  output: "export",

  // IMPORTANT for GitHub Pages project sites:
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
