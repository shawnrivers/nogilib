/* eslint-disable */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'NOGILIB',
    siteUrl: 'https://nogilib.com',
    description:
      'NOGILIB is a web app for showing the information about Nogizaka46 in a user-friendly way.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'React',
        allExtensions: true,
      },
    },
    'gatsby-plugin-resolve-src',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src/assets/images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.join(__dirname, 'src/data'),
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: path.join(__dirname, 'src/client/layouts/index.tsx'),
      },
    },
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'NOGILIB',
        short_name: 'NOGILIB',
        start_url: '/discography',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/assets/images/icon.png',
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        analyzerMode: 'server',
        analyzerPort: 8888,
      },
    },
    'gatsby-plugin-remove-serviceworker',
  ],
};
