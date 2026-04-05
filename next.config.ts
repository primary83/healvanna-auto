import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/compare",
        destination: "/compare-evs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
