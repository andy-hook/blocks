import styled from "styled-components"
import React, { memo } from "react"
import Link from "gatsby-plugin-transition-link"
import { useWeb3Context } from "@components/shared/web3-provider/web3-provider"

const Home: React.FunctionComponent = memo(() => {
  const context = useWeb3Context()

  console.log("context", context)
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
