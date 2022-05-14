/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
  experimental: {
    scrollRestoration: true,
    images: { layoutRaw: true },
  },
};

module.exports = nextConfig;
