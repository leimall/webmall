/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dms.pub',
      },
      {
        protocol: 'https',
        hostname: 'images.ftanails.com',
      }
    ],
  },
  transpilePackages: ['antd']
};

export default nextConfig;
