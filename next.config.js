/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: false,
    assetPrefix: isProd ? '/portfolio-next/' : '',
};

module.exports = nextConfig;
