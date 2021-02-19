const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/preset-typescript',
  ],
  webpackFinal: async config => {
    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.resolve.alias['client'] = path.resolve(__dirname, '../src/client/');
    config.resolve.alias['server'] = path.resolve(__dirname, '../src/server/');
    config.resolve.alias['utils'] = path.resolve(__dirname, '../src/utils/');
    config.resolve.alias['storybook'] = path.resolve(__dirname, 'libs/');
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../src/client'),
        path.resolve(__dirname, '../src/server'),
        path.resolve(__dirname, '../src/utils'),
        path.resolve(__dirname, '../.storybook'),
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
            plugins: [
              require.resolve('@babel/plugin-proposal-class-properties'),
            ],
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
