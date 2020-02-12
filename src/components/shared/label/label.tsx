import React from "react"
import styled from "styled-components"
import { setBasePlaceholderCrop } from "@style/typography"
import { type } from "@style/design-tokens"

interface Props {
  loading?: boolean
  skeletonWidth?: "sm" | "md" | "lg"
  truncate?: boolean
}

const Label: React.FunctionComponent<Props> = ({
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
  position: relative;
  color: white;
  background-color: orange;

  ${props =>
    props.truncate &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;`}
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
