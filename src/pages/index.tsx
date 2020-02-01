import React, { memo } from "react"

import SEO from "@components/seo"
import Home from "@components/home/home"

const IndexPage: React.FunctionComponent = memo(() => {
  return (
    <>
      <SEO />
      <Home />
    </>
  )
})

export default IndexPage
