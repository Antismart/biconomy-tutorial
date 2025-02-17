// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
interface WebpackConfig {
  resolve: {
    fallback: {
      fs: boolean;
      net: boolean;
      tls: boolean;
    };
  };
}

interface NextConfig {
  reactStrictMode: boolean;
  webpack: (config: WebpackConfig, options: { isServer: boolean }) => WebpackConfig;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;