/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd37mh8t61y5k4l.cloudfront.net',
        pathname: '/**',
      },
    ],
  },

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Reduce bundle size
  swcMinify: true,

  // Transpile Three.js packages
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
}

module.exports = nextConfig
