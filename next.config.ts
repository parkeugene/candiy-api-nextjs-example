import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
        allowedDevOrigins: ["http://localhost:3000"], // 개발 환경에서 허용할 Origin 설정
    },
};

export default nextConfig;
