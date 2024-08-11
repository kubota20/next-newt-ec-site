/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "site.assets.newt.so",
      },
    ],
  },
};

export default nextConfig;
