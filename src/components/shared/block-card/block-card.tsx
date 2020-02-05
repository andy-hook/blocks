import React from "react"
import { Web3BlockData } from "model"
import { Link } from "gatsby"
import TransactionsSummary from "@components/shared/block-card/transactions-summary/transactions-summary"

interface Props {
  blockNumber: Web3BlockData["number"]
  transactions: Web3BlockData["transactionsData"]
}

const BlockCard: React.FunctionComponent<Props> = ({
  blockNumber,
  transactions,
}) => {
  return (
    <>
      <Link to={`/blocks/${blockNumber}`}>Go to block {blockNumber}</Link>
      <TransactionsSummary transactions={transactions} />
    </>
  )
}

export default BlockCard
