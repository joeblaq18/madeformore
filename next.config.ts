import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/madeformore",
  assetPrefix: "/madeformore/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
