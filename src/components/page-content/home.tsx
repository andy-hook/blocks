import styled from "styled-components"
import React, { memo } from "react"
import Link from "gatsby-plugin-transition-link"
import { useWeb3BlocksDataContext } from "@providers/web3-blocks-data-provider/web3-blocks-data-provider"
import BlockList from "@components/shared/block-list/block-list"

const Home: React.FunctionComponent = memo(() => {
  const web3Blocks = useWeb3BlocksDataContext()

  return (
    <>
      <Container>
        <Link to={`/blocks/3235634`}>Go to block</Link>

        {web3Blocks.data && <BlockList blocks={web3Blocks.data} />}
      </Container>
    </>
  )
})

export default Home

const Container = styled.div`
  color: red;
  padding-top: 300px;
  height: 2000px;
`
