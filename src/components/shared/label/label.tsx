import React, { memo, ReactNode } from "react"
import styled from "styled-components"
import {
  typeBaseSemibold,
  setBaseCropAndLineHeight,
  setBasePlaceholderCrop,
  typeSizeBaseSm,
  typeSizeBaseMd,
  typeSizeBaseLg,
} from "@style/typography"
import { type, appearance } from "@style/design-tokens"
import { isTheme, themeForeground } from "@style/theme"
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
  children?: ReactNode
}

const Label: React.FunctionComponent<Props> = memo(
  ({
    children,
    className,
    loading,
    skeletonWidth = "md" as SkeletonWidth,
    intensity = "medium" as Intensity,
    size = "md" as Size,
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
)

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
  low: themeForeground("medium"),
  medium: themeForeground("high"),
  high: themeForeground("extraHigh"),
}

const Text = styled.div<{
  intensity: Intensity
  size: Size
}>`
  ${setBaseCropAndLineHeight(type.lineHeight.base.regular)}
  ${typeBaseSemibold}
  ${props => textSize[props.size]};

  max-width: 100%;
  position: relative;
  color: ${props => textColors[props.intensity]};

  ${isTheme("dark", `text-shadow: ${appearance.textShadow.subtle}`)};
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
