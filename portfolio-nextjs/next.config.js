/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};

export default nextConfig;
