import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Adjust this if needed to restrict to specific paths
      },
    ],
  },
};

export default nextConfig;
