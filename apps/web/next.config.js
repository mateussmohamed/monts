/**
 * @type {import('next').NextConfig}
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['ui']);

const nextConfig = withTM({
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
