import React from "react";
import Certel from "./svg/certel";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const Section1 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150, quality: 100, webpQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="columns is-mobile is-multiline  is-centered">
              <div className="faid-in">
                <h1 className="title">Hi!</h1>
                <h2 className="subtitle">
                  I'm a <strong>front-end developer</strong> based in Aydın,
                  Turkey. I have a passion for web design and love to create for
                  web and mobile devices. It is also a joy for me to read and
                  search new and best technologies for my job.
                </h2>
              </div>
              <figure className="is-150x150 mt-6">
                <Img
                  fixed={data.file.childImageSharp.fixed}
                  alt="Mert CERTEL"
                />
              </figure>
            </div>
          </div>
          <div className="column">
            <Certel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section1;
