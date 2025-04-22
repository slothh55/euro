/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
  },
  // Removed experimental.appDir as it's now default in Next.js 14+
};

module.exports = nextConfig;
