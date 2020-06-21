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
            content="I can build interactive design and useful products for both web and mobile platforms."
          />
          <Card
            title="Design"
            Icon={Icon.Pen}
            content="Simplicity represents thoroughness, beauty, and understanding."
          />
          <Card
            title="Connectivity"
            Icon={Icon.Chain}
            content="I can work independently or with a team. I run my freelance business with integrity."
          />
        </div>
      </div>
    </section>
  )
}

export default Section2
