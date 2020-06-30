import React from "react";
import Img from "gatsby-image";

const Tags = ({ tag }) => {
  return (
    <>
      {tag.image ? (
        <div className="post-tags-figure">
          <Img fixed={tag.image.childImageSharp.fixed} alt={tag.name} />
          <div className="post-tags-figure-tooltip">
            <span>{tag.name}</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Tags;
