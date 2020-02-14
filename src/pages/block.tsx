import React from "react"
import SEO from "@components/seo"
import { Router } from "@reach/router"
import BlockSingle from "@components/page-content/block-single"

const BlockPage: React.FunctionComponent = () => {
  return (
    <>
      <SEO />

      <Router>
        <BlockSingle path="/block/:blockNumberFromUrl" />
      </Router>
    </>
  )
}

export default BlockPage
