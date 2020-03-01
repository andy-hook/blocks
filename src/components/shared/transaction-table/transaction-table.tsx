import React from "react"
import styled from "styled-components"
import Transaction from "./transaction/transaction"
import { Web3BlockData } from "model"
import ColumnsTemplate from "./columns-template/columns-template"
import Label from "../label/label"
import { layout } from "@style/design-tokens"
import { toString } from "lodash"
import { mq } from "@style/media-queries"
import { mimicPanelSizeAndPresentation } from "../panel/panel"

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
          value={trx.ether}
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
  ${mimicPanelSizeAndPresentation({ xSize: "lg", ySize: "sm" })}

  display: block;
`

const TableHeadRow = styled.tr`
  display: flex;
`

const TableBody = styled.tbody`
  width: 100%;
  display: block;
`

const DataRow = styled(Transaction)`
  margin-top: ${layout.scale[3]};

  ${mq.greaterThan("topDesk")`
    margin-top: ${layout.scale[5]};
  `}
`

export default TransactionTable
