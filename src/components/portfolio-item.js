import React from "react"

function portfolioItem({ data }) {
  return (
    <div className="column is-one-third ">
      <a>
        <div className="portfolio-card-img">
          <figure class="image is-4by3">
            <img src={`./portfolio/${data.node.name}/main.png`} />
          </figure>
          <div
            style={{
              background: data.node.color,
            }}
            className="portfolio-card-img-overlay"
          >
            <img src={`./portfolio/${data.node.name}/logo.svg`} />
          </div>
          {/* <div
            style={{
              background: "#082D52",
            }}
            className="portfolio-card-img-bottom"
          >
            <span className="is-size-6">{data.node.title}</span>
          </div> */}
        </div>
      </a>
    </div>
  )
}

export default portfolioItem
