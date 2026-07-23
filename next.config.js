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
      // Removed fictional business profile pages — redirect to the real, live directory
      {
        source: '/care/precision-auto-spa',
        destination: '/care',
        permanent: true,
      },
      {
        source: '/care/elite-ceramic-works',
        destination: '/care',
        permanent: true,
      },
      {
        source: '/care/luxe-interior-studio',
        destination: '/care',
        permanent: true,
      },
      {
        source: '/craft/ev-collision-center',
        destination: '/craft',
        permanent: true,
      },
      {
        source: '/craft/prestige-auto-body',
        destination: '/craft',
        permanent: true,
      },
      {
        source: '/craft/heritage-restoration',
        destination: '/craft',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
