import React from "react"
import styled, { css } from "styled-components"
import {
  typeBaseSemibold,
  setBaseCropAndLineHeight,
  setBasePlaceholderCrop,
} from "@style/typography"
import { type, appearance } from "@style/design-tokens"
import { isTheme, themeText } from "@style/theme"

type IntensityTypes = "low" | "medium" | "high"

interface Props {
  loading?: boolean
  skeletonWidth?: "sm" | "md" | "lg"
  truncate?: boolean
  intensity?: IntensityTypes
}

const Label: React.FunctionComponent<Props> = ({
  children,
  loading,
  skeletonWidth = "md",
  truncate = false,
  intensity = "medium",
}) => {
  return (
    <Text truncate={truncate} intensity={intensity}>
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

const textColors = {
  low: themeText(800),
  medium: themeText(500),
  high: themeText(700),
}

const Text = styled.div<{
  truncate: boolean
  intensity: IntensityTypes
}>`
  ${setBaseCropAndLineHeight(type.lineHeight.base.regular)}
  ${typeBaseSemibold}
  position: relative;

  color: ${props => textColors[props.intensity]};

  ${props =>
    props.truncate &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;`}
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
    ${setBasePlaceholderCrop(type.lineHeight.base.regular)}

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

export default Label
