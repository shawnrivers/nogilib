/* eslint-disable */
const path = require('path');

module.exports = {
  pathPrefix: '/nogilib',
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
        path: path.join(__dirname, 'src/assets/images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src/data'),
      },
    },
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display:400,700'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'NOGILIB',
        short_name: 'NOGILIB',
        start_url: '/nogilib/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/assets/images/icon.png',
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [{ name: 'en' }, { name: 'ja' }],
        fields: [
          { name: 'name', store: true, attributes: { boost: 20 } },
          { name: 'title', store: true },
          { name: 'number', store: true },
          { name: 'key', store: true },
          { name: 'nameKey', store: true },
          { name: 'artwork', store: true },
          { name: 'profileImage', store: true },
          { name: 'nameNotations', store: true },
          { name: 'songType', store: true },
          { name: 'single', store: true },
          { name: 'album', store: true },
          { name: 'type', store: true },
          { name: 'cdType', store: true },
          { name: 'join', store: true },
        ],
        resolvers: {
          MembersJson: {
            name: node =>
              node.nameNotations.lastName +
              node.nameNotations.firstName +
              ' ' +
              node.nameNotations.lastNameFurigana +
              node.nameNotations.firstNameFurigana +
              ' ' +
              node.name,
            key: node => node.name,
            nameNotations: node => node.nameNotations,
            profileImage: node => node.profileImage,
            join: node => node.join,
            type: () => 'members',
          },
          DiscographyJson: {
            name: node => node.title + ' ' + node.key,
            title: node => node.title,
            key: node => node.key,
            number: node => node.number,
            artwork: node => node.artworks[0],
            cdType: node => node.type,
            type: () => 'cds',
          },
          SongsJson: {
            name: node => node.title + ' ' + node.key,
            title: node => node.title,
            key: node => node.key,
            artwork: node => node.artwork,
            songType: node => node.type,
            single: node => node.single,
            album: node => node.albums[0],
            type: () => 'songs',
          },
        },
      },
    },
    'gatsby-plugin-remove-serviceworker',
  ],
};
