import React, { ReactNode } from "react"
import Footer from "@components/shared/footer/footer"
import styled from "styled-components"
import { layout } from "@style/design-tokens"

interface Props {
  children: ReactNode
}

const Page: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <PageContent>{children}</PageContent>
    <Footer />
  </>
)

export const PageContent = styled.div`
  padding-bottom: ${layout.scale[14]};
`

export default Page
