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
      // Blog slugs that exist under /insights/ instead — redirect to prevent 404s
      {
        source: "/blog/us-evs-vs-chinese-evs",
        destination: "/insights/us-evs-vs-chinese-evs",
        permanent: true,
      },
      {
        source: "/blog/best-ceramic-coatings-2025",
        destination: "/insights/best-ceramic-coatings-2025",
        permanent: true,
      },
      {
        source: "/blog/tesla-vs-lucid-vs-rivian",
        destination: "/insights/tesla-vs-lucid-vs-rivian",
        permanent: true,
      },
      {
        source: "/blog/finding-trusted-body-shop",
        destination: "/insights/finding-trusted-body-shop",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
