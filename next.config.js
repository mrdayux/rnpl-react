/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
