import React from "react"
import { Web3TransactionData } from "model"
import TransactionPip from "@components/shared/block-card/transaction-pip/transaction-pip"
import styled from "styled-components"
import { layout } from "@style/design-tokens"

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

  display: flex;
  flex-wrap: wrap;

  margin: -${layout.scale[1]};
`

export const GridItem = styled.li``

export default TransactionsSummary
