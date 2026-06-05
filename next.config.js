const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root (a stray lockfile lives in the home dir).
  outputFileTracingRoot: path.join(__dirname),
  // Keep existing plain <img> tags + static /images assets working without
  // per-image width/height; revisit with next/image as a perf follow-up.
  images: {
    unoptimized: true,
  },
  // MUI v4/reactstrap ship some CJS/ESM that Next may need to transpile.
  transpilePackages: [
    '@material-ui/core',
    '@material-ui/icons',
    'react-reveal',
  ],
  eslint: {
    // Don't fail production builds on lint during the migration.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
