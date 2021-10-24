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
};
