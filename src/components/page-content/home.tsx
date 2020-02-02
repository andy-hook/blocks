import styled from "styled-components"
import React, { memo } from "react"
import Link from "gatsby-plugin-transition-link"

const Home: React.FunctionComponent = memo(() => {
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
