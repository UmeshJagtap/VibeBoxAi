import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://iili.io/**')],
  },
};

export default nextConfig;
