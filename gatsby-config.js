/* eslint-disable */
const path = require("path");

module.exports = {
  pathPrefix: "/nogizaka-lib-redesign",
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `React`,
        allExtensions: true,
      },
    },
    `gatsby-plugin-resolve-src`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, "src/data"),
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.join(__dirname, `src/layouts/index.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Nogizaka Lib",
        short_name: "Nogilib",
        start_url: "/nogizaka-lib-redesign/cds/singles/",
        background_color: "#ffffff",
        theme_color: "#af7dce",
        display: "standalone",
        icon: "src/assets/images/favicon-512.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
