import React from "react"
import { Web3TransactionData } from "model"
import TransactionPip from "@components/shared/block-card/transaction-pip/transaction-pip"
import styled from "styled-components"

interface Props {
  transactions?: Web3TransactionData[]
  loading?: boolean
}

const MAX_TRANSACTIONS = 20

const TransactionsSummary: React.FunctionComponent<Props> = ({
  transactions,
}) => {
  const renderAsHolderOrPopulated = (
    index: number,
    transaction?: Web3TransactionData | null
  ) => {
    if (transaction) {
      return (
        <TransactionPip
          key={index}
          value={transaction.value}
          from={transaction.from}
          to={transaction.to}
        />
      )
    } else {
      return <TransactionPip key={index} />
    }
  }

  // Render holding items while awaiting data
  const renderItems = () => {
    return Array.from(Array(MAX_TRANSACTIONS)).map((_, index) => {
      return renderAsHolderOrPopulated(
        index,
        transactions && transactions[index]
      )
    })
  }

  return <Grid>{renderItems()}</Grid>
}

export const Grid = styled.ul`
  position: relative;

  overflow: hidden;

  height: 70px;

  background-color: blue;
`

export default TransactionsSummary
