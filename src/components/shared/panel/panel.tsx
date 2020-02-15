import React, { memo, ReactNode } from "react"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import { mq } from "@style/media-queries"
import classNames from "classnames"
import { themeTone } from "@style/theme"

interface Props {
  className?: string
  children?: ReactNode
}

const Panel: React.FunctionComponent<Props> = ({ children, className }) => {
  return <Container className={classNames("", className)}>{children}</Container>
}

const Container = styled.div`
  padding: ${layout.scale[7]};

  ${mq.greaterThan("topLap")`
    padding: ${layout.scale[8]};
  `}

  ${mq.greaterThan("topWide")`
    padding: ${layout.scale[9]};
  `}

  ${mq.greaterThan("topWall")`
    padding: ${layout.scale[10]};
  `}

  background-color: ${themeTone(500)};
`

export default memo(Panel)
