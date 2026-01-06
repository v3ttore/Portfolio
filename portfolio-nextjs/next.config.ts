import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  devIndicators: {
    // @ts-ignore - buildActivity is valid but types might be missing in this version
    buildActivity: false,
  },
  // Uncomment and set basePath when deploying to GitHub Pages
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
};

export default nextConfig;

