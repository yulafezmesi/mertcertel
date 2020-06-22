import React from "react";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";

const postcard = ({ item }) => {
  const getPureDatetime = (iso) => {
    const months = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ];
    let newDate = new Date(iso);
    let dateString = `${newDate.getDate()} ${
      months[newDate.getMonth()]
    } ${newDate.getFullYear()}`;
    return dateString;
  };

  return (
    <div className="column is-7">
      <div class="card">
        <div class="card-content">
          <p class="title">{item.title}</p>
          <ReactMarkdown
            source={`${item.content.substring(
              0,
              350
            )} ..[devamını okuyayım](/posts/${item.url_id})`}
          />
        </div>
        <footer class="card-footer">
          <div class="card-footer-item">
            <div className="post-tags">
              {item.tags.map((tag) => (
                <div className="post-tags-figure">
                  <Img fixed={tag.image.childImageSharp.fixed} alt={tag.name} />
                  <div className="post-tags-figure-tooltip">
                    <span>{tag.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p class="card-footer-item">
            <span>
              <time datetime={item.created_at}>
                {getPureDatetime(item.created_at)}
              </time>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default postcard;
