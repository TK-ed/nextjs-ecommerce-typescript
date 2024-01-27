/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com", hostname: "static.nike.com" }],
  },
};

export default nextConfig;
