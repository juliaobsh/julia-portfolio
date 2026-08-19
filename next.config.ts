import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local screenshots in /public are already sized and compressed; skip the
    // optimizer so the build stays static and portable.
    unoptimized: true,
  },
};

export default nextConfig;
