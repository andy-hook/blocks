import React from "react"
import { Web3TransactionData } from "model"
import TransactionPip from "@components/shared/block-card/transaction-pip/transaction-pip"
import styled from "styled-components"

interface Props {
  transactions?: Web3TransactionData[]
  loading?: boolean
}

const MAX_TRANSACTIONS = 60

const TransactionsSummary: React.FunctionComponent<Props> = ({
  transactions,
  loading,
}) => {
  const renderAsHolderOrPopulated = (transaction?: Web3TransactionData) => {
    if (transaction) {
      return (
        <TransactionPip
          value={transaction.ether}
          from={transaction.from}
          to={transaction.to}
        />
      )
    } else {
      return <TransactionPip />
    }
  }

  // Renders items
  const renderItems = () => {
    return Array.from(Array(MAX_TRANSACTIONS)).map((_, index) => {
      return (
        <GridItem key={index}>
          {loading ? (
            <TransactionPip loading={true} />
          ) : (
            renderAsHolderOrPopulated(transactions && transactions[index])
          )}
        </GridItem>
      )
    })
  }

  return <Grid>{renderItems()}</Grid>
}

export const Grid = styled.ul`
  position: relative;

  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(1em, 1em));

  grid-gap: 8px;

  background-color: blue;
`

export const GridItem = styled.li``

export default TransactionsSummary
