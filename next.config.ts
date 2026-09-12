import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/shop-next",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
