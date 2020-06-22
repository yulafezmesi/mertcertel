import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCard from "../components/posts/postcard";
import "../style/post.scss";
const PostPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <div className="container d-flex flex-column justify-content-center align-items-center mt-6">
      {data.allStrapiPosts.nodes.map((item) => (
        <PostCard key={item.id} item={item} />
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  {
    allStrapiPosts {
      nodes {
        title
        url_id
        strapiId
        content
        created_at
        tags {
          id
          image {
            id
            childImageSharp {
              fixed(width: 22, height: 20) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          name
        }
      }
    }
  }
`;
export default PostPage;
