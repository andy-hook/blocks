import React, { memo, ReactNode } from "react"
import styled, { css } from "styled-components"
import { layout, appearance } from "@style/design-tokens"
import { mq } from "@style/media-queries"
import classNames from "classnames"
import { themeLayer, isTheme, themeForegroundAlpha } from "@style/theme"

type PaddingSize = "sm" | "md" | "lg"

interface PanelSizes {
  xSize: PaddingSize
  ySize: PaddingSize
}

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
        xSize={xPadding}
        ySize={yPadding}
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

function mimicPanelPadding({ xSize, ySize }: PanelSizes) {
  return css`
    padding: ${paddingSizes[ySize].base} ${paddingSizes[xSize].base};

  ${mq.greaterThan("topLap")`
    padding: ${paddingSizes[ySize].topLap} ${paddingSizes[xSize].topLap} ;
  `}

  ${mq.greaterThan("topWide")`
    padding: ${paddingSizes[ySize].topWide} ${paddingSizes[xSize].topWide};
  `}

  ${mq.greaterThan("topWall")`
    padding: ${paddingSizes[ySize].topWall} ${paddingSizes[xSize].topWall};
  `}
  `
}

const darkModeShadow = css`
  box-shadow: 2rem 2rem 6rem 0 ${themeLayer("low")};
`

const lightModeShadow = css`
  box-shadow: 0rem 0.2rem 0.3rem 0 ${themeForegroundAlpha("low", 0.5)};
`

const panelShadow = css`
  ${isTheme("dark", darkModeShadow, lightModeShadow)};
`

// It's annoying to have to provide this but forwardAs isn't supported
// in my current version of styled components
export function mimicPanelSizeAndPresentation({ xSize, ySize }: PanelSizes) {
  return css`
    ${panelShadow}
    ${mimicPanelPadding({ xSize, ySize })}

    border-radius: ${appearance.radius.base};
    background-color: ${themeLayer("high")};
  `
}

const Container = styled.div<PanelSizes>`
  ${props =>
    mimicPanelSizeAndPresentation({
      xSize: props.xSize,
      ySize: props.ySize,
    })}
`

export default Panel
