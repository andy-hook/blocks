import React from "react"
import styled, { css } from "styled-components"
import {
  typeBaseSemibold,
  setBaseCropAndLineHeight,
  setBasePlaceholderCrop,
  typeSizeBaseSm,
  typeSizeBaseMd,
  typeSizeBaseLg,
} from "@style/typography"
import { type, appearance } from "@style/design-tokens"
import { isTheme, themeText } from "@style/theme"
import classNames from "classnames"

type Intensity = "low" | "medium" | "high"
type Size = "sm" | "md" | "lg"
export type SkeletonWidth = "sm" | "md" | "lg"

interface Props {
  loading?: boolean
  skeletonWidth?: SkeletonWidth
  size?: Size
  intensity?: Intensity
  className?: string
}

const Label: React.FunctionComponent<Props> = ({
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
  sm: typeSizeBaseSm,
  md: typeSizeBaseMd,
  lg: typeSizeBaseLg,
}

const textColors = {
  low: themeText(900),
  medium: themeText(500),
  high: themeText(700),
}

const Text = styled.div<{
  intensity: Intensity
  size: Size
}>`
  ${setBaseCropAndLineHeight(type.lineHeight.base.regular)}
  ${typeBaseSemibold}
  ${props => textSize[props.size]};

  position: relative;
  color: ${props => textColors[props.intensity]};

  ${isTheme(
    "dark",
    css`
      text-shadow: ${appearance.textShadow.subtle};
    `
  )};
`

const Skeleton = styled.div<Props>`
  display: inline-block;
  position: relative;

  width: 100%;

  ${props =>
    props.skeletonWidth && `max-width: ${skeletonWidths[props.skeletonWidth]}`};

  &:before {
    ${setBasePlaceholderCrop(type.lineHeight.base.regular)}

    content: '';

    position: absolute;
    left: 0;

    width: 100%;

    background-color: currentColor;
  }
`

export default Label
