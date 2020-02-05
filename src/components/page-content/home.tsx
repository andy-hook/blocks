import styled from "styled-components"
import React, { memo } from "react"
import Link from "gatsby-plugin-transition-link"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import BlockList from "@components/shared/block-list/block-list"
import Page from "@components/shared/page/page"

const Home: React.FunctionComponent = memo(() => {
  const { data } = useWeb3BlocksDataContext()

  return <Page>{data && <BlockList blockData={data} />}</Page>
})

export default Home
