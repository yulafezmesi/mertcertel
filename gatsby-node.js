/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages.
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const getArticles = makeRequest(
    graphql,
    `
    {
        allStrapiPosts {
         edges {
            node {
                url_id
              }
         }
        }
      }
    `
  ).then((result) => {
    // Create pages for each article.
    result.data.allStrapiPosts.edges.forEach(({ node }) => {
      createPage({
        path: `/post/${node.url_id}`,
        component: path.resolve(`src/templates/post-details.js`),
        context: {
          id: node.url_id,
        },
      });
    });
  });

  //   const getAuthors = makeRequest(
  //     graphql,
  //     `
  //     {
  //       allStrapiUser {
  //         edges {
  //           node {
  //             id
  //           }
  //         }
  //       }
  //     }
  //     `
  //   ).then((result) => {
  //     // Create pages for each user.
  //     result.data.allStrapiUser.edges.forEach(({ node }) => {
  //       createPage({
  //         path: `/authors/${node.id}`,
  //         component: path.resolve(`src/templates/author.js`),
  //         context: {
  //           id: node.id,
  //         },
  //       });
  //     });
  //   });

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([getArticles]);
};
