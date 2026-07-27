/** @type {import('next').NextConfig} */
// GitHub Pages project URL needs /Smart-academy-; local `next dev` stays at /
const basePath = process.env.NODE_ENV === 'production' ? '/Smart-academy-' : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: { unoptimized: true },
  devIndicators: false,
};

module.exports = nextConfig;
