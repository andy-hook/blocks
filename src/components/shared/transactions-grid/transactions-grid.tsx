import React from "react"
import { Web3TransactionData } from "model"
import TransactionPip from "../transactions-pip/transactions-pip"

interface Props {
  transactions: Web3TransactionData[]
}

const TransactionsGrid: React.FunctionComponent<Props> = ({ transactions }) => {
  const transactionsToRender = transactions.map((ItemData, index) => {
    return (
      <TransactionPip
        key={index}
        value={ItemData.value}
        from={ItemData.from}
        to={ItemData.to}
      />
    )
  })

  return <div>{transactionsToRender}</div>
}

export default TransactionsGrid
