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
    domains: ['tz.smart-ui.pro'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig