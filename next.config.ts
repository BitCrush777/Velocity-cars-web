import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Velocity-cars-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
