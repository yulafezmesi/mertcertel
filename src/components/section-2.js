import React from "react"
import Card from "./section2card"
import * as Icon from "./svg/icons"
const Section2 = () => {
  return (
    <section className="section">
      <div className="container ">
        <h1 className="title color-title has-text-centered mb-6">
          What exactly can I do?
        </h1>
        <div className="columns is-desktop">
          <Card
            title="Idea"
            Icon={Icon.Idea}
            content="I can building interactive design and useful products for both web and mobile platforms."
          />
          <Card
            title="Simplicity"
            Icon={Icon.Pen}
            content="Design, simplicity represents thoroughness, beauty, and understanding."
          />
          <Card
            title="Connectivity"
            Icon={Icon.Chain}
            content="I can work independently with a team. I run my freelance business with honesty."
          />
        </div>
      </div>
    </section>
  )
}

export default Section2
