import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../sections/header"
import FirstSection from "../sections/FirstSection"
import Footer from "../sections/Footer"



const IndexPage = () => (
  <Layout>
    <Header isIndex={true} />
    <FirstSection />
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
