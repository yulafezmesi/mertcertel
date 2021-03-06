import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostCard from "../components/posts/postcard";
import "../style/post.scss";
const PostPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <section className="section pl-0 pr-0">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        {data.allStrapiPosts.nodes.map((item) => (
          <PostCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  {
    allStrapiPosts(sort: { order: DESC, fields: created_at }) {
      nodes {
        title
        url_id
        strapiId
        content
        created_at
        tumblr_img {
          childImageSharp {
            fluid(maxWidth: 10000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags {
          id
          image {
            id
            childImageSharp {
              fixed(width: 25, height: 25) {
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
