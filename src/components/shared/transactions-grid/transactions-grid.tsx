import React from "react"
import { Web3BlockData } from "model"
import TransactionPip from "../transactions-pip/transactions-pip"
import useWeb3TransactionData from "@hooks/web3-transaction-data"

interface Props {
  transactions: Web3BlockData["transactions"]
}

const TransactionsGrid: React.FunctionComponent<Props> = ({ transactions }) => {
  const { data } = useWeb3TransactionData(transactions)

  const transactionsToRender = () => {
    if (data) {
      return data.map((ItemData, index) => {
        return (
          <TransactionPip
            key={index}
            value={ItemData.value}
            from={ItemData.from}
            to={ItemData.to}
          />
        )
      })
    }
  }

  return <div>{transactionsToRender()}</div>
}

export default TransactionsGrid
