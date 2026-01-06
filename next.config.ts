import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize production builds
  compiler: {
    // Remove console.log in production (keeps console.error/warn)
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  
  // Experimental features for better performance
  experimental: {
    // Enable optimized package imports for better tree-shaking
    optimizePackageImports: ["@supabase/supabase-js"],
  },
};

export default nextConfig;
