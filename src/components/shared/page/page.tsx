import React, { memo, ReactNode } from "react"
import Footer from "@components/shared/footer/footer"
import styled from "styled-components"
import { layout } from "@style/design-tokens"

interface Props {
  children: ReactNode
}

const Page: React.FunctionComponent<Props> = memo(({ children }) => (
  <Container>
    {children}
    <Footer />
  </Container>
))

export const Container = styled.div`
  padding-top: ${layout.scale[16]};
`

export default Page
