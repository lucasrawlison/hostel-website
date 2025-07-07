import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['placehold.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    
  },
}

export default nextConfig;
