import React from "react"
import styled from "styled-components"
import BlockTransactionRow from "./block-transaction-row/block-transaction-row"
import { themeTone } from "@style/theme"
import { Web3BlockData } from "model"
import BlockTransactionCols from "./block-transaction-cols/block-transaction-cols"
import Label from "../label/label"

interface Props {
  transactions: Web3BlockData["transactionsData"]
}

const BlockTransactions: React.FunctionComponent<Props> = ({
  transactions,
}) => {
  // Renders items
  function renderBodyRows() {
    return transactions.map((trx, index) => {
      return (
        <Row
          key={index}
          blockNumber={trx.blockNumber}
          trxHash={trx.hash}
          from={trx.from}
          to={trx.to}
          value={trx.value}
        />
      )
    })
  }

  return (
    <Table>
      <thead>
        <tr>
          <BlockTransactionCols
            tableHeader={true}
            one={<Heading>Block</Heading>}
            two={<Heading>Hash</Heading>}
            three={<Heading>From / To</Heading>}
            four={<Heading>Value</Heading>}
          />
        </tr>
      </thead>
      <tbody>{renderBodyRows()}</tbody>
    </Table>
  )
}

const Heading: React.FunctionComponent = ({ children }) => (
  <Label intensity="low" size="lg">
    {children}
  </Label>
)

const Table = styled.table`
  background-color: ${themeTone(500)};
`

const Row = styled(BlockTransactionRow)``

export default BlockTransactions
