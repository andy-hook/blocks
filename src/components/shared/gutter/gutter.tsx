import React, { memo, ReactNode } from "react"
import { mq } from "@style/media-queries"
import styled from "styled-components"
import { rem } from "polished"

interface Props {
  children: ReactNode
}

const Gutter = memo(
  React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => (
    <GutterContainer ref={ref}>{children}</GutterContainer>
  ))
)

export const smallScreenGutter = rem("25px")

const GutterContainer = styled.div`
  padding-left: ${smallScreenGutter};
  padding-right: ${smallScreenGutter};

  ${mq.between("topThumb", "topDesk")`
    padding-left: 5%;
    padding-right: 5%;
  `}

  ${mq.between("topDesk", "bottomUltra")`
    padding-left: 7%;
    padding-right: 7%;
  `}

  width: 100%;
`

export default Gutter
