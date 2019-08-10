/* eslint-disable */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "AlbumsJson") {
    console.log(node.number, node.title);
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug + node.number,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
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
  `).then(result => {
    result.data.allAlbumsJson.edges.forEach(({ node }) => {
      const cdType = node.fields.slug.split("/")[1];
      const number = node.fields.slug.split("/")[2];

      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/components/Cd/index.tsx"),
        context: {
          number,
          cdType,
        },
      });
    });
  });
};
