import React from "react"
import Certel from "./svg/certel"
import Profile from "../images/profile.jpg"
export default function section1() {
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
                <img alt="Mert CERTEL" src={Profile} />
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
