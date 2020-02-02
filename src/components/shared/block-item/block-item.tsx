import React from "react"
import { Web3BlockData } from "model"
import { Link } from "gatsby"
import TransactionsGrid from "../transactions-grid/transactions-grid"

interface Props {
  blockNumber: Web3BlockData["number"]
  transactions: Web3BlockData["transactions"]
}

const BlockItem: React.FunctionComponent<Props> = ({
  blockNumber,
  transactions,
}) => {
  return (
    <>
      <Link to={`/blocks/${blockNumber}`}>Go to block {blockNumber}</Link>
      <TransactionsGrid transactions={transactions} />
    </>
  )
}

export default BlockItem
