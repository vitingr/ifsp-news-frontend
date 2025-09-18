import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'img.clerk.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: [
      'maath',
      'react-lottie',
      'react-typed',
      'swiper',
      'three',
      'three-globe'
    ]
  },
  output: 'standalone',
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    }

    return config
  }
}

export default nextConfig
