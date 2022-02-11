module.exports = {
  i18n: {
    locales: ['ja', 'en', 'zh'],
    defaultLocale: 'ja',
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // NOTE: Using Preact broke Japanese input on iOS, try again in later Preact and Next.js versions.
  // webpack: (config, { dev, isServer }) => {
  //   // Swap React with Preact in the client production build
  //   // @see https://youtu.be/R59e1Vl5lO8?t=177
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat',
  //     });
  //   }

  //   return config;
  // },
};
