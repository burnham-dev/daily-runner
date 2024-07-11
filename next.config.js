/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANTIY_PROJECT_ID: process.env.SANTIY_PROJECT_ID,
    BASE_URL: process.env.BASE_URL
  }
}

module.exports = nextConfig
