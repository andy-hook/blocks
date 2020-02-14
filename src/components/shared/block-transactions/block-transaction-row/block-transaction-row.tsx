import React from "react"
import classNames from "classnames"
import BlockTransactionCols from "../block-transaction-cols/block-transaction-cols"
import styled from "styled-components"

interface Props {
  blockNumber?: number
  trxHash?: string
  from?: string
  to?: string
  value?: string
  className?: string
}

const BlockTransactionRow: React.FunctionComponent<Props> = ({
  blockNumber,
  trxHash,
  from,
  to,
  value,
  className,
}) => {
  return (
    <Row className={classNames("", className)}>
      <BlockTransactionCols
        one={blockNumber}
        two={trxHash}
        three={
          <div>
            {from}
            {to}
          </div>
        }
        four={value}
      />
    </Row>
  )
}

const Row = styled.tr`
  background-color: red;
`

export default BlockTransactionRow
