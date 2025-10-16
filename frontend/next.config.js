/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/csr-video-production',
  images: {
    unoptimized: true 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;