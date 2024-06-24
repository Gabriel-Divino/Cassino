/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/hello',
            destination: '/api/hello',
          },
   
        ];
      },
};

export default nextConfig;
