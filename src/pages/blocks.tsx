import React from "react"
import SEO from "@components/seo"
import { Router } from "@reach/router"
import Block from "@components/block/block"
import IndexPage from "."

const BlocksPage: React.FunctionComponent = () => {
  return (
    <>
      <SEO />

      <Router>
        <IndexPage path="/blocks" />
        <Block path="/blocks/:blockHash" />
      </Router>
    </>
  )
}

export default BlocksPage
