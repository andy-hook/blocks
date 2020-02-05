import React from "react"
import { Web3BlockData } from "model"
import TransactionPip from "../transactions-pip/transactions-pip"

interface Props {
  transactions: Web3BlockData["transactionsData"]
}

const TransactionsGrid: React.FunctionComponent<Props> = ({ transactions }) => {
  const transactionsToRender = () => {
    if (transactions) {
      return transactions.map((transaction, index) => {
        return (
          <TransactionPip
            key={index}
            value={transaction.value}
            from={transaction.from}
            to={transaction.to}
          />
        )
      })
    }
  }

  return <div>{transactionsToRender()}</div>
}

export default TransactionsGrid
