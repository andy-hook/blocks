import React from "react"
import styled from "styled-components"
import Label, { SkeletonWidth } from "@components/shared/label/label"
import classNames from "classnames"
import TruncateString from "react-truncate-string"

interface Props {
  name: string
  value?: string
  loading?: boolean
  className?: string
  skeletonWidth?: SkeletonWidth
}

const BlockInfoRow: React.FunctionComponent<Props> = ({
  name,
  value,
  loading,
  className,
  skeletonWidth,
}) => {
  return (
    <Row className={classNames("", className)}>
      {name}

      <ValueLabel>
        <Label loading={loading} skeletonWidth={skeletonWidth}>
          <TruncateString text={value} truncateAt={40} />
        </Label>
      </ValueLabel>
    </Row>
  )
}

const Row = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`

const ValueLabel = styled.div`
  text-align: right;
  width: 50%;
`

export default BlockInfoRow
