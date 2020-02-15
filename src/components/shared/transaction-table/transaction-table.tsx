import React from "react"
import styled from "styled-components"
import Transaction, { rowPaddingX } from "./transaction/transaction"
import { themeTone } from "@style/theme"
import { Web3BlockData } from "model"
import ColumnsTemplate from "./columns-template/columns-template"
import Label from "../label/label"
import { layout } from "@style/design-tokens"
import { toString } from "lodash"

interface Props {
  transactions: Web3BlockData["transactionsData"]
}

const TransactionTable: React.FunctionComponent<Props> = ({ transactions }) => {
  function renderBodyRows() {
    return transactions.map((trx, index) => {
      return (
        <DataRow
          key={index}
          blockNumber={toString(trx.blockNumber)}
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
      <TableHead>
        <TableHeadRow>
          <ColumnsTemplate
            tableHeader={true}
            block={<Heading>Block</Heading>}
            hash={<Heading>Hash</Heading>}
            fromTo={<Heading>From / To</Heading>}
            value={<Heading>Value</Heading>}
          />
        </TableHeadRow>
      </TableHead>
      <TableBody>{renderBodyRows()}</TableBody>
    </Table>
  )
}

const Heading: React.FunctionComponent = ({ children }) => (
  <Label intensity="low" size="lg">
    {children}
  </Label>
)

const Table = styled.table`
  display: block;
`

const TableHead = styled.thead`
  display: block;
  padding: ${layout.scale[7]} ${rowPaddingX};
  background-color: ${themeTone(500)};
`

const TableHeadRow = styled.tr`
  display: flex;
`

const TableBody = styled.tbody`
  width: 100%;
  display: block;
`

const DataRow = styled(Transaction)`
  margin-top: ${layout.scale[5]};
`

export default TransactionTable
