import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "static1.squarespace.com"
        },
        {
          protocol: "https",
          hostname: "cf.bstatic.com"
        },
      ]
    },
  eslint: {
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;
