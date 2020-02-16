import React, { memo } from "react"
import Gutter from "../gutter/gutter"
import Limiter from "../limiter/limiter"
import styled from "styled-components"
import { themeLayer } from "@style/theme"

const Footer: React.FunctionComponent = memo(() => (
  <Container>
    <Gutter>
      <Limiter>I am a footer</Limiter>
    </Gutter>
  </Container>
))

const Container = styled.footer`
  height: 500px;

  background-color: ${themeLayer("low")};
`

export default Footer
