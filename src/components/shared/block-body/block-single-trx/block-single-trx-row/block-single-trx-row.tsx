import React from "react"
import styled from "styled-components"
import classNames from "classnames"
import { layout } from "@style/design-tokens"

interface Props {
  blockNumber?: number
  trxHash?: string
  from?: string
  to?: string
  value?: string
  className?: string
}

const BlockSingleTrxRow: React.FunctionComponent<Props> = ({
  blockNumber,
  trxHash,
  from,
  to,
  value,
  className,
}) => {
  return (
    <Row className={classNames("", className)}>
      {blockNumber}
      {trxHash}
      {from}
      {to}
      {value}
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

export default BlockSingleTrxRow
