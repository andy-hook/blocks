import styled from "styled-components"
import React, { memo } from "react"

const Home: React.FunctionComponent = memo(() => {
  return <Container>Hello world</Container>
})

export default Home

const Container = styled.div`
  height: 2000px;
`
