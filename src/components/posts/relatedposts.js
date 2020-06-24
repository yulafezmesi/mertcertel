import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
const RelatedPosts = ({ tags, title }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allStrapiTags {
            edges {
              node {
                strapiId
                posts {
                  title
                  url_id
                  tumblr_img {
                    childImageSharp {
                      fixed(width: 30, height: 30) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const relatedPostsArray = [];
        const nodes = data.allStrapiTags.edges;
        const filteredTags = nodes.filter((filter) =>
          tags.includes(filter.node.strapiId)
        );
        filteredTags.map((item) => {
          item.node.posts.map((post) => {
            let index = relatedPostsArray.findIndex(
              (i) => i.url_id === post.url_id
            );
            if (index === -1 && post.url_id !== title)
              relatedPostsArray.push(post);
          });
        });
        console.log(relatedPostsArray);
        return (
          <>
            {relatedPostsArray.length ? (
              relatedPostsArray.map((item) => (
                <div className="d-flex px-2 py-2">
                  <div>
                    <figcaption>
                      <Img
                        fixed={item.tumblr_img.childImageSharp.fixed}
                        alt={item.title}
                      />
                    </figcaption>
                  </div>
                  {/* <img src="https://i.picsum.photos/id/952/536/354.jpg?hmac=3ZJxobQFrMExEtGHYHcOYNrlhwJqfb-WKqAXMJIOuQs"></img> */}
                  <div className="card-title d-flex align-items-center ml-2">
                    <Link
                      to={`post/${item.url_id}`}
                      className="related-posts-link"
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>
                İlişkili bir yazı bulamadım, diğer postlara göz atmak{" "}
                <Link to="/post">isteyebilirsin</Link>
              </p>
            )}
          </>
        );
      }}
    ></StaticQuery>
  );
};

export default RelatedPosts;
