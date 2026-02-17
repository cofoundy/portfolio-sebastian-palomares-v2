const basePath = '/portfolio-sebastian-palomares-v2';

module.exports = {
    basePath,
    assetPrefix: `${basePath}/`,
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
