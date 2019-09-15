/* eslint-disable */
const path = require("path");

module.exports = {
  pathPrefix: "/nogizaka-lib-redesign",
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "React",
        allExtensions: true,
      },
    },
    "gatsby-plugin-resolve-src",
    "gatsby-transformer-json",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "src/data"),
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: path.join(__dirname, "src/layouts/index.tsx"),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Nogizaka Lib",
        short_name: "Nogilib",
        start_url: "/nogizaka-lib-redesign/cds/singles/",
        background_color: "#ffffff",
        theme_color: "#e887a3",
        display: "standalone",
        icon: "src/assets/images/favicon-512.png",
        crossOrigin: "use-credentials",
      },
    },
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [{ name: "en" }, { name: "ja" }],
        fields: [
          { name: "name", store: true, attributes: { boost: 20 } },
          { name: "title", store: true },
          { name: "number", store: true },
          { name: "key", store: true },
          { name: "nameKey", store: true },
          { name: "artwork", store: true },
          { name: "profileImage", store: true },
          { name: "nameNotations", store: true },
          { name: "songType", store: true },
          { name: "single", store: true },
          { name: "album", store: true },
          { name: "type", store: true },
        ],
        resolvers: {
          MembersJson: {
            name: node =>
              node.nameNotations.lastName +
              node.nameNotations.firstName +
              " " +
              node.nameNotations.lastNameFurigana +
              node.nameNotations.firstNameFurigana +
              " " +
              node.name,
            nameKey: node => node.name,
            nameNotations: node => node.nameNotations,
            profileImage: node => node.profileImage,
            type: () => "members",
          },
          AlbumsJson: {
            name: node => node.title,
            title: node => node.title,
            number: node => node.number,
            artwork: node => node.artworks[0],
            type: () => "albums",
          },
          SinglesJson: {
            name: node => node.title,
            title: node => node.title,
            number: node => node.number,
            artwork: node => node.artworks[0],
            type: () => "singles",
          },
          SongsJson: {
            name: node => node.title + " " + node.key,
            title: node => node.title,
            key: node => node.key,
            artwork: node => node.artwork,
            songType: node => node.type,
            single: node => node.single,
            album: node => node.albums[0],
            type: () => "songs",
          },
        },
      },
    },
    "gatsby-plugin-remove-serviceworker",
  ],
};
