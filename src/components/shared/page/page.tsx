import React, { memo } from "react"
import Footer from "@components/shared/footer/footer"
import styled from "styled-components"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"

const Page: React.FunctionComponent = memo(({ children }) => (
  <Container>
    {children}
    <Footer />
  </Container>
))

export const Container = styled.div`
  padding-top: 10rem;

  ${scaleBetween("padding-top", "10rem", "15rem", "topThumb", "bottomUltra")}

  ${scaleGreaterThan("padding-top", "15rem", "topUltra")}
`

export default Page
