import React from "react";
import { Link, Img } from "gatsby";
import ReactMarkdown from "react-markdown";
import Tag from "./tags";
import Helper from "../../helpers/index";
const postcard = ({ item }) => {
  return (
    <div className="column is-7 article post-card">
      <div class="card">
        <div class="card-content">
          <h1 className="title">
            <Link to={`post/${item.url_id}`}>{item.title}</Link>
          </h1>
          {/* {item.tumblr_img ? (
            <Link to={`post/${item.url_id}`}>
              <Img
                className="mb-3"
                fluid={item.tumblr_img.childImageSharp.fluid}
                alt={item.title}
              />
            </Link>
          ) : null} */}
          <ReactMarkdown source={item.content.substring(0, 350)} />
          <span>
            <Link to={`post/${item.url_id}`}>..devamını okuyayım</Link>
          </span>
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <div className="post-tags">
              {item.tags.map((tag) => (
                <Tag tag={tag} />
              ))}
            </div>
          </div>
          <p class="card-footer-item">
            <span>
              <time datetime={item.created_at}>
                {Helper.getStringDate(item.created_at)}
              </time>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default postcard;
