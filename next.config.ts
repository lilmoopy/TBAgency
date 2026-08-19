import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://platform.tbagency.co",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
