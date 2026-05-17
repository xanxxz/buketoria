const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.twcstorage.ru',
        pathname: '/**',
      },
    ],

    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней
  },
  reactStrictMode: true,
};

export default nextConfig;
