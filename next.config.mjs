/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/hello',
            destination: '/api/hello',
          },
          // Adicione mais regras de reescrita conforme necessário
        ];
      },
};

export default nextConfig;
