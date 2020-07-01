import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section1 from "../components/section-1"
import Section2 from "../components/section-2"

const IndexPage = () => (
  <Layout>
    <SEO title="Frontend Developer" />
    <Section1 />
    {/* <Section2 /> */}
  </Layout>
)

export default IndexPage
