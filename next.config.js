/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  output: "export", // Move this option outside of the images configuration
};

module.exports = nextConfig;
