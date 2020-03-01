import React from "react"

import SEO from "@components/seo"
import Home from "@components/page-content/home"

interface Props {
  path: string
}

const IndexPage: React.FunctionComponent<Props> = () => {
  return (
    <>
      <SEO />
      <Home />
    </>
  )
}

export default IndexPage
