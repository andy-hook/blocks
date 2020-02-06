import React from "react"
import styled from "styled-components"

export type SkeletonWidth = "xs" | "sm" | "md" | "lg" | "xl"

interface Props {
  width?: SkeletonWidth
}

const TextSkeleton: React.FunctionComponent<Props> = ({ width = "md" }) => {
  return <Skeleton width={width}>&nbsp;</Skeleton>
}

const widths = {
  xs: "1em",
  sm: "3em",
  md: "5em",
  lg: "7em",
  xl: "20em",
}

const Skeleton = styled.div<Props>`
  background-color: brown;

  ${props => props.width && `max-width: ${widths[props.width]}`};
`

export default TextSkeleton
