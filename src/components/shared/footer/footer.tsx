import React, { memo } from "react"
import Gutter from "../gutter/gutter"
import Limiter from "../limiter/limiter"
import * as S from "./footer.style"

const Footer: React.FunctionComponent = memo(() => (
  <S.Container>
    <Gutter>
      <Limiter>I am a footer</Limiter>
    </Gutter>
  </S.Container>
))

export default Footer
