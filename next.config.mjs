/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kravindo.s3.ap-southeast-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
