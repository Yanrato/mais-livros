import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgv2-1-f.scribdassets.com",
      },
    ],
  },
};

export default nextConfig;
