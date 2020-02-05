import React from "react"
import { Web3TransactionData } from "model"

interface Props {
  value: Web3TransactionData["value"]
  to: Web3TransactionData["to"]
  from: Web3TransactionData["from"]
}

const TransactionPip: React.FunctionComponent<Props> = ({
  value,
  to,
  from,
}) => {
  return (
    <>
      <div>{value}</div>
      <div>{to}</div>
      <div>{from}</div>
    </>
  )
}

export default TransactionPip
