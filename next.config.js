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
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/cars/:brand(tesla|bmw|mercedes|porsche|rivian|lucid|audi|ford|chevrolet|cadillac|gmc|dodge|volkswagen|volvo|polestar|jaguar|vinfast|honda|nissan|toyota|lexus|subaru|acura|mini|fiat|hyundai|kia|genesis|byd|nio|xpeng|li-auto|xiaomi|zeekr)',
          destination: '/cars/:brand.html',
        },
      ],
    };
  },
};

module.exports = nextConfig;
