/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  }
}

const withPurgeCss = require("next-purgecss");
module.exports = withPurgeCss(nextConfig);
