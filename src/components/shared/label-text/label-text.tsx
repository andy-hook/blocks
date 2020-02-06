import React from "react"
import styled from "styled-components"
import TextSkeleton, {
  SkeletonWidth,
} from "@components/shared/text-skeleton/text-skeleton"

interface Props {
  loading?: boolean
  skeletonWidth?: SkeletonWidth
  truncate?: boolean
}

const LabelText: React.FunctionComponent<Props> = ({
  children,
  loading,
  skeletonWidth,
  truncate = false,
}) => {
  return (
    <Text truncate={truncate}>
      {loading ? (
        <TextSkeleton width={skeletonWidth}>&nbsp;</TextSkeleton>
      ) : (
        children
      )}
    </Text>
  )
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

export default LabelText
