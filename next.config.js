const basePath = '';

module.exports = {
    output: 'export',
    basePath,
    assetPrefix: basePath || undefined,
    images: { unoptimized: true },
    swcMinify: true,
    env: {
      BASE_PATH: basePath,
    },
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};
