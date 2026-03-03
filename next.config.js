/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/compare',
        destination: '/compare-evs',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
