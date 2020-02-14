import React from "react"
import styled from "styled-components"
import Label, { SkeletonWidth } from "@components/shared/label/label"
import classNames from "classnames"
import TruncateString from "react-truncate-string"
import Title from "@components/shared/title/title"
import { layout } from "@style/design-tokens"

interface Props {
  name: string
  value?: string
  loading?: boolean
  className?: string
  skeletonWidth?: SkeletonWidth
}

const BlockSingleTrxRow: React.FunctionComponent<Props> = ({
  name,
  value,
  loading,
  className,
  skeletonWidth,
}) => {
  return (
    <Row className={classNames("", className)}>
      <Title size="sm">{name}</Title>

      <ValueLabel>
        <Label
          loading={loading}
          skeletonWidth={skeletonWidth}
          intensity="medium"
          size="lg"
        >
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

  padding-top: ${layout.scale[8]};
  padding-bottom: ${layout.scale[8]};
`

const ValueLabel = styled.div`
  text-align: right;
  width: 50%;
`

export default BlockSingleTrxRow
