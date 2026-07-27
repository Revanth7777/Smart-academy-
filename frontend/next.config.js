/** @type {import('next').NextConfig} */
const basePath = '/Smart-academy-';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: { unoptimized: true },
  devIndicators: false,
};

module.exports = nextConfig;
