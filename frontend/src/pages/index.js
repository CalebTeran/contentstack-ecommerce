import * as React from "react"

import Layout from "../components/ui/layout"
import HeroBlock from "../components/home/HeroBlock"
import PromotionalProducts from "../components/home/PromotionalProducts"

const IndexPage = () => (
  <Layout>
    <HeroBlock/>
    <PromotionalProducts/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
