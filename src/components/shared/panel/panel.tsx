import React, { memo, ReactNode } from "react"
import styled, { css } from "styled-components"
import { layout } from "@style/design-tokens"
import { mq } from "@style/media-queries"
import classNames from "classnames"
import { themeTone } from "@style/theme"

type PaddingSize = "sm" | "md" | "lg"

interface Props {
  className?: string
  children?: ReactNode
  xPadding?: PaddingSize
  yPadding?: PaddingSize
}

interface ResponsiveSizes {
  base: string
  topLap: string
  topWide: string
  topWall: string
}

const Panel: React.FunctionComponent<Props> = memo(
  ({
    children,
    className,
    xPadding = "md" as PaddingSize,
    yPadding = "md" as PaddingSize,
  }) => {
    return (
      <Container
        xPadding={xPadding}
        yPadding={yPadding}
        className={classNames("", className)}
      >
        {children}
      </Container>
    )
  }
)

const paddingSizes: { [index: string]: ResponsiveSizes } = {
  sm: {
    base: layout.scale[6],
    topLap: layout.scale[6],
    topWide: layout.scale[7],
    topWall: layout.scale[7],
  },
  md: {
    base: layout.scale[7],
    topLap: layout.scale[8],
    topWide: layout.scale[9],
    topWall: layout.scale[10],
  },
  lg: {
    base: layout.scale[7],
    topLap: layout.scale[9],
    topWide: layout.scale[10],
    topWall: layout.scale[11],
  },
}

export function mimicPanelPadding(opts: {
  xSize: PaddingSize
  ySize: PaddingSize
}) {
  return css`
    padding: ${paddingSizes[opts.ySize].base} ${paddingSizes[opts.xSize].base};

  ${mq.greaterThan("topLap")`
    padding: ${paddingSizes[opts.ySize].topLap} ${paddingSizes[opts.xSize].topLap} ;
  `}

  ${mq.greaterThan("topWide")`
    padding: ${paddingSizes[opts.ySize].topWide} ${paddingSizes[opts.xSize].topWide};
  `}

  ${mq.greaterThan("topWall")`
    padding: ${paddingSizes[opts.ySize].topWall} ${paddingSizes[opts.xSize].topWall};
  `}
  `
}

const Container = styled.div<{
  xPadding: PaddingSize
  yPadding: PaddingSize
}>`

  ${props =>
    mimicPanelPadding({ xSize: props.xPadding, ySize: props.yPadding })}

  background-color: ${themeTone(500)};
`

export default Panel
