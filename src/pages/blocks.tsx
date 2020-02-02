import React from "react"
import SEO from "@components/seo"
import { Router } from "@reach/router"
import Block from "@components/page-content/block"

const BlocksPage: React.FunctionComponent = () => {
  return (
    <>
      <SEO />

      <Router>
        <Block path="/blocks/:blockHash" />
      </Router>
    </>
  )
}

export default BlocksPage
