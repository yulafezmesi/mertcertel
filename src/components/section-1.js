import React from "react"
import Certel from "./svg/certel"
export default function section1() {
  return (
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">Section</h1>
            <h2 class="subtitle">
              A simple container to divide your page into{" "}
              <strong>sections</strong>, like the one you're currently reading
            </h2>
          </div>
          <div class="column">
            <Certel>
              <p>selam</p>
            </Certel>
          </div>
        </div>
      </div>
    </section>
  )
}
