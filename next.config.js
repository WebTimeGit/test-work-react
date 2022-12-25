/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFontsL: true,
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig