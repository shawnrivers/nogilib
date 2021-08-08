const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
  ],
  webpackFinal: async config => {
    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.resolve.alias['client'] = path.resolve(__dirname, '../src/client/');
    config.resolve.alias['server'] = path.resolve(__dirname, '../src/server/');
    config.resolve.alias['utils'] = path.resolve(__dirname, '../src/utils/');
    config.resolve.alias['storybook'] = path.resolve(__dirname, 'libs/');
    return config;
  },
  babel: async options => {
    const presets = options.presets.slice();

    // Modify the presets config of @babel/preset-react.
    presets[2][1] = {
      runtime: 'automatic',
      importSource: '@emotion/react',
    };

    return {
      ...options,
      presets,
    };
  },
};
