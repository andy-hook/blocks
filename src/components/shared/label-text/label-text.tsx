import React from "react"
import styled from "styled-components"
import TextSkeleton, {
  SkeletonWidth,
} from "@components/shared/text-skeleton/text-skeleton"

interface Props {
  loading?: boolean
  skeletonWidth?: SkeletonWidth
}

const LabelText: React.FunctionComponent<Props> = ({
  children,
  loading,
  skeletonWidth,
}) => {
  return (
    <Text>
      {loading ? (
        <TextSkeleton width={skeletonWidth}>&nbsp;</TextSkeleton>
      ) : (
        children
      )}
    </Text>
  )
}

const Text = styled.div`
  color: white;
  background-color: orange;
`

export default LabelText
