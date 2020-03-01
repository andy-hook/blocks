import React, { ReactNode } from "react"
import { mq } from "@style/media-queries"
import styled from "styled-components"
import { rem } from "polished"

interface Props {
  children: ReactNode
}

const Gutter = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => (
  <GutterContainer ref={ref}>{children}</GutterContainer>
))

export const smallScreenGutter = rem("15px")

const GutterContainer = styled.div`
  padding-left: ${smallScreenGutter};
  padding-right: ${smallScreenGutter};

  ${mq.between("topThumb", "topDesk")`
    padding-left: 3%;
    padding-right: 3%;
  `}

  ${mq.between("topDesk", "bottomUltra")`
    padding-left: 7%;
    padding-right: 7%;
  `}

  width: 100%;
`

export default Gutter
