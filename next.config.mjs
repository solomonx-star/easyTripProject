/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === "production") {
  module.exports = {
    jest: {
      collectCoverage: false,
    },
  };
}


export default nextConfig;
