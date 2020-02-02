import styled from "styled-components"
import React, { memo } from "react"
import Link from "gatsby-plugin-transition-link"
import { useWeb3BlocksDataContext } from "@providers/web3-blocks-data-provider/web3-blocks-data-provider"

const Home: React.FunctionComponent = memo(() => {
  const web3Blocks = useWeb3BlocksDataContext()

  if (!web3Blocks.loading) {
    console.log(web3Blocks.data)
  }

  return (
    <Container>
      <Link to={`/blocks/3235634`}>Go to block</Link>
    </Container>
  )
})

export default Home

const Container = styled.div`
  color: red;
  padding-top: 300px;
  height: 2000px;
`
