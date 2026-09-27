import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // OpenNext (Cloudflare Workers) 需要 standalone 产物
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "./"),
  turbopack: {},
  webpack: (config) => {
    return config;
  },
  env: {
    CURRENT_SITE_DOMAIN: process.env.CURRENT_SITE_DOMAIN || "twelveangledstone.com",
  },
};

export default nextConfig;
