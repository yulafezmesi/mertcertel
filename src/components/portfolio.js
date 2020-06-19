import React from "react"
import PortfolioItem from "./portfolio-item"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allPortfoliosXlsxSayfa1 {
        edges {
          node {
            id
            name
            description
            title
            url
            images
            prog_lang
            color
          }
        }
      }
    }
  `)
  return (
    <div className="columns is-multiline is-3-desktop ">
      {data.allPortfoliosXlsxSayfa1.edges.map(node => {
        return <PortfolioItem data={node} />
      })}
    </div>
  )
}

export default ComponentName
