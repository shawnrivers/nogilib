/* eslint-disable */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'SongsJson') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug + node.key + '/',
    });
  }

  if (node.internal.type === 'MembersJson') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug + node.name + '/',
    });
  }

  if (node.internal.type === 'DiscographyJson') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug + node.key + '/',
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const songsResult = await graphql(`
    {
      allSongsJson {
        nodes {
          fields {
            slug
          }
          key
        }
      }
    }
  `);

  const membersResult = await graphql(`
    {
      allMembersJson {
        nodes {
          fields {
            slug
          }
          name
        }
      }
    }
  `);

  const discographyResult = await graphql(`
    {
      allDiscographyJson {
        nodes {
          fields {
            slug
          }
          key
        }
      }
    }
  `);

  if (songsResult.errors || membersResult.errors || discographyResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  songsResult.data.allSongsJson.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/client/features/Song/container.tsx'),
      context: {
        key: node.key,
      },
    });
  });

  membersResult.data.allMembersJson.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/client/features/Member/container.tsx'),
      context: {
        name: node.name,
      },
    });
  });

  discographyResult.data.allDiscographyJson.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/client/features/Album/container.tsx'),
      context: {
        key: node.key,
      },
    });
  });
};
