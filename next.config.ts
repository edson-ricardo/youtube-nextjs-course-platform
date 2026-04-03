import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        //port: '',
        protocol: 'https',
        hostname: 'i.ytimg.com',
        //pathname: '/account123/**',
      },
    ],
  },
};


export default nextConfig;
