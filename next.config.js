/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  assetPrefix: isProd ? "/portfolio-next/" : "",
};

module.exports = nextConfig;
