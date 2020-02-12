import React from "react"
import { Web3BlockData } from "model"
import { Link } from "gatsby"
import TransactionsSummary from "@components/shared/block-card/transactions-summary/transactions-summary"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import Label from "@components/shared/label/label"

interface Props {
  blockNumber?: number
  transactions?: Web3BlockData["transactionsData"]
  size?: number
  difficulty?: string
  miner?: string
  loading?: boolean
}

const CardContent: React.FunctionComponent<Props> = ({
  blockNumber,
  transactions,
  size,
  difficulty,
  miner,
  loading,
}) => {
  const renderTrxAsPlaceholderOrPopulated = (
    blockTransactions: Props["transactions"]
  ) => {
    if (blockTransactions) {
      return <TransactionsSummary transactions={blockTransactions} />
    } else {
      return <TransactionsSummary loading={true} />
    }
  }

  return (
    <Card>
      {/* Title info */}
      <Label intensity="low">Block number</Label>
      <Label loading={loading} skeletonWidth="sm">
        {blockNumber}
      </Label>

      {/* Transactions */}
      {renderTrxAsPlaceholderOrPopulated(transactions)}

      {/* Details */}
      <CardDetails>
        <CardDetailsItem>
          <Label>Size:</Label>
          <Label loading={loading} skeletonWidth="sm">
            {size}
          </Label>
        </CardDetailsItem>
        <CardDetailsItem>
          <Label>Difficulty:</Label>
          <Label loading={loading} skeletonWidth="md">
            {difficulty}
          </Label>
        </CardDetailsItem>
        <CardDetailsItem>
          <Label>Miner:</Label>
          <Label loading={loading} truncate={true} skeletonWidth="lg">
            {miner}
          </Label>
        </CardDetailsItem>
      </CardDetails>

      {/* CTA */}
      <Link to={`/blocks/${blockNumber}`}>Go to block {blockNumber}</Link>
    </Card>
  )
}

export const Card = styled.div`
  padding: ${layout.scale[10]};
`

export const CardDetails = styled.div``

export const CardDetailsItem = styled.div``

export default CardContent
