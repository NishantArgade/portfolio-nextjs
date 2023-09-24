/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "localhost"],
  },
  env: {
    STRAPI_DOMAIN: process.env.STRAPI_DOMAIN,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
