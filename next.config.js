/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
