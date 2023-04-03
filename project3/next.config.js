/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'topsecretrecipes.com',
        port: '',
        pathname: '/images/product/carls-jr-santa-fe-chicken-sandwich-copycat-recipe.jpg',
      },
    ],
  },
}

module.exports = nextConfig
