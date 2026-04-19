import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
