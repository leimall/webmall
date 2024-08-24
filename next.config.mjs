/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftanails.dms.pub',
        port: '',
      },
    ],
  },
};

export default nextConfig;
