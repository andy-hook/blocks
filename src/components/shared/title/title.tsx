import React from "react"
import styled, { css } from "styled-components"
import {
  typeSizeDisplaySm,
  typeSizeDisplayMd,
  typeSizeDisplayLg,
  setDisplayCropAndLineHeight,
  setDisplayPlaceholderCrop,
  typeDisplayBold,
  typeSizeDisplayXs,
} from "@style/typography"
import { type, appearance } from "@style/design-tokens"
import { isTheme, themeText } from "@style/theme"
import classNames from "classnames"

type Intensity = "low" | "medium" | "high"
type Size = "xs" | "sm" | "md" | "lg"

interface Props {
  loading?: boolean
  skeletonWidth?: "sm" | "md" | "lg"
  size?: Size
  intensity?: Intensity
  className?: string
}

const Title: React.FunctionComponent<Props> = ({
  children,
  className,
  loading,
  skeletonWidth = "md",
  intensity = "medium",
  size = "md",
}) => {
  return (
    <Text
      intensity={intensity}
      size={size}
      className={classNames("", className)}
    >
      {loading ? (
        <Skeleton skeletonWidth={skeletonWidth}>&nbsp;</Skeleton>
      ) : (
        children
      )}
    </Text>
  )
}

const skeletonWidths = {
  sm: "3em",
  md: "5em",
  lg: "7em",
}

const textSize = {
  xs: typeSizeDisplayXs,
  sm: typeSizeDisplaySm,
  md: typeSizeDisplayMd,
  lg: typeSizeDisplayLg,
}

const textIntensity = {
  low: themeText(900),
  medium: themeText(500),
  high: themeText(100),
}

const Text = styled.div<{
  intensity: Intensity
  size: Size
}>`
  ${setDisplayCropAndLineHeight(type.lineHeight.display.regular)}
  ${typeDisplayBold}
  ${props => textSize[props.size]};

  position: relative;
  max-width: 100%;
  color: ${props => textIntensity[props.intensity]};

  ${isTheme(
    "dark",
    css`
      text-shadow: ${appearance.textShadow.subtle};
    `
  )};
`

const Skeleton = styled.div<Props>`
  position: relative;

  &:before {
    ${setDisplayPlaceholderCrop(type.lineHeight.display.regular)}

    content: '';

    position: absolute;
    left: 0;

    width: 100%;

    background-color: currentColor;

    ${props =>
      props.skeletonWidth &&
      `max-width: ${skeletonWidths[props.skeletonWidth]}`};
  }
`

export default Title
