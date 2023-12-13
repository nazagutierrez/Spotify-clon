/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
