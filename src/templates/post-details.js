import React, { useEffect } from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Tag from "../components/posts/tags";
import CodeBlock from "../components/codeblock";
import ReleatedPosts from "../components/posts/relatedposts";
import Img from "gatsby-image";

export default function PostDetails({ data }) {
  function flatten(text, child) {
    return typeof child === "string"
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text);
  }

  function HeadingRenderer(props) {
    var children = React.Children.toArray(props.children);
    var text = children.reduce(flatten, "");
    var slug = text.toLowerCase().replace(/\W/g, "-");
    return React.createElement("h" + props.level, { id: slug }, props.children);
  }
  const allRelatedTags = () => {
    return data.strapiPosts.tags.map((item) => item.id);
  };
  const allRelatedTagNames = () => {
    return data.strapiPosts.tags.map((item) => item.name).join(",");
  };
  return (
    <Layout>
      <SEO keywords={allRelatedTagNames()} title={data.strapiPosts.title} />
      <section className="section pl-0 pr-0">
        <div className="container">
          <div className="columns">
            <div className="column is-8 article">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-2">{data.strapiPosts.title}</h2>
                  <Img
                    className="mb-3"
                    fluid={data.strapiPosts.tumblr_img.childImageSharp.fluid}
                    alt={data.strapiPosts.title}
                  />

                  <ReactMarkdown
                    renderers={{ code: CodeBlock, heading: HeadingRenderer }}
                    source={data.strapiPosts.content}
                  />
                </div>
              </div>
            </div>
            <div className="column is-4 ">
              <div className="card card-sticky">
                <header className="card-header">
                  <p className="card-header-title">İlişkili Yazılar</p>
                  <div className="d-flex align-items-center ml-3">
                    {data.strapiPosts.tags.map((tag) => (
                      <Tag key={tag.name} tag={tag} />
                    ))}
                  </div>
                </header>
                <div className="card-content">
                  <div className="content">
                    <ReleatedPosts
                      tags={allRelatedTags()}
                      title={data.strapiPosts.url_id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiPosts(url_id: { eq: $id }) {
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
            fixed(width: 22, height: 20) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        name
      }
    }
  }
`;
