/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  compress: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },

  async headers() {
    return [
      {
        source: '/demo',
        headers: [
          {
            key: 'Accept-Encoding',
            value: 'gzip',
          },
          {
            key: 'Accept-Encoding',
            value: 'br',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
