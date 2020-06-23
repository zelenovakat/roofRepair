import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageOne from "../pages/PageOne"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <PageOne />
    </div>
  </Layout>
)

export default IndexPage
