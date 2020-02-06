import React from "react"
import { Web3TransactionData } from "model"
import TransactionPip from "@components/shared/block-card/transaction-pip/transaction-pip"
import styled from "styled-components"

interface Props {
  transactions?: Web3TransactionData[]
  loading?: boolean
}

const MAX_TRANSACTIONS = 50

const TransactionsSummary: React.FunctionComponent<Props> = ({
  transactions,
}) => {
  const renderAsHolderOrPopulated = (transaction?: Web3TransactionData) => {
    if (transaction) {
      return (
        <TransactionPip
          value={transaction.value}
          from={transaction.from}
          to={transaction.to}
        />
      )
    } else {
      return <TransactionPip />
    }
  }

  // Render holding items while awaiting data
  const renderItems = () => {
    return Array.from(Array(MAX_TRANSACTIONS)).map((_, index) => {
      return (
        <div key={index}>
          {renderAsHolderOrPopulated(transactions && transactions[index])}
        </div>
      )
    })
  }

  return <Grid>{renderItems()}</Grid>
}

export const Grid = styled.ul`
  position: relative;

  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(1em, 1fr));

  background-color: blue;
`

export const GridItem = styled.li``

export default TransactionsSummary
