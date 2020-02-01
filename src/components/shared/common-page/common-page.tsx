import React, { memo } from "react"
import Footer from "@components/shared/footer/footer"
import * as S from "./common-page.style"

const CommonPage: React.FunctionComponent = memo(({ children }) => (
  <S.Container>
    {children}
    <Footer />
  </S.Container>
))

export default CommonPage
