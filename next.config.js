/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  compress: false,
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
