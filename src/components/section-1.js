import React from "react"
import Certel from "./svg/certel"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
  `)
  return (
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div className="columns is-mobile is-multiline  is-centered">
              <div className="faid-in">
                <h1 class="title">Hi!</h1>
                <h2 class="subtitle">
                  I'm a <strong>front-end developer</strong> based in Aydin,
                  Turkey. I have a passion for web design and love to create for
                  web and mobile devices. It is also a joy for me to read and
                  search new and best technologies for my job.
                </h2>
              </div>
              <figure className="is-150x150 mt-6">
                <Img
                  fixed={data.file.childImageSharp.fixed}
                  alt="Gatsby Docs are awesome"
                />
              </figure>
            </div>
          </div>
          <div class="column">
            <Certel />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section1
