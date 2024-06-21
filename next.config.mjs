/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/hello',
            destination: '/api/hello',
          },
          {
            source: '/web-api/auth/session/v2/verifySession',
            destination: '/api/verify-session',
          },
          {
            source: '/web-api/game-proxy/v2/GameName/Get',
            destination: '/api/game-name',
          },
          {
            source: '/web-api/game-proxy/v2/Resources/GetByResourcesTypeIds',
            destination: '/api/get-by-resources-typeIds',
          },
          {
            source: '/game-api/fortune-tiger/v2/Spin',
            destination: '/api/spin',
          },
          {
            source: '/shared/3c4695a542/index.json',
            destination: '/api/shared',
          },
          // Adicione mais regras de reescrita conforme necessário
        ];
      },
};

export default nextConfig;
