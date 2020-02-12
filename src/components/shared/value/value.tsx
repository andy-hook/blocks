import React from "react"
import styled, { css } from "styled-components"
import {
  typeBaseSemibold,
  setBaseCropAndLineHeight,
  setBasePlaceholderCrop,
} from "@style/typography"
import { type, appearance } from "@style/design-tokens"
import { isTheme } from "@style/theme"

interface Props {
  loading?: boolean
  skeletonWidth?: "sm" | "md" | "lg"
  truncate?: boolean
}

const Value: React.FunctionComponent<Props> = ({
  children,
  loading,
  skeletonWidth = "md",
  truncate = false,
}) => {
  return (
    <Text truncate={truncate}>
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

const Text = styled.div<{ truncate: boolean }>`
  ${setBaseCropAndLineHeight(type.lineHeight.base.regular)}
  ${typeBaseSemibold}
  position: relative;

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

export default Value
