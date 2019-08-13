/* eslint-disable */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "AlbumsJson") {
    console.log(node.number, node.title);
    // const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: "/albums/" + node.number,
    });
  }

  if (node.internal.type === "SinglesJson") {
    console.log(node.number, node.title);
    createNodeField({
      node,
      name: "slug",
      value: "/singles/" + node.number,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const albumsResult = await graphql(`
    {
      allAlbumsJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const singlesResult = await graphql(`
    {
      allSinglesJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (albumsResult.errors || singlesResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  albumsResult.data.allAlbumsJson.edges.forEach(({ node }) => {
    const cdType = node.fields.slug.split("/")[1];
    const number = node.fields.slug.split("/")[2];

    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/templates/Album/index.tsx"),
      context: {
        number,
        cdType,
      },
    });
  });

  singlesResult.data.allSinglesJson.edges.forEach(({ node }) => {
    const cdType = node.fields.slug.split("/")[1];
    const number = node.fields.slug.split("/")[2];

    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/templates/Single/index.tsx"),
      context: {
        number,
        cdType,
      },
    });
  });
};
