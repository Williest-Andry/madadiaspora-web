import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: ["192.168.50.143", "10.231.125.44"],
};

export default nextConfig;
