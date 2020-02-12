import React from "react"
import { Web3BlockData } from "model"
import { Link } from "gatsby"
import TransactionsSummary from "@components/shared/block-card/transactions-summary/transactions-summary"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import Value from "@components/shared/value/value"
import Label from "@components/shared/label/label"

interface Props {
  blockNumber?: number
  transactions?: Web3BlockData["transactionsData"]
  size?: number
  difficulty?: string
  miner?: string
  loading?: boolean
}

const BlockCard: React.FunctionComponent<Props> = ({
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
      <Label>Block number</Label>
      <Value loading={loading} skeletonWidth="sm">
        {blockNumber}
      </Value>

      {/* Transactions */}
      {renderTrxAsPlaceholderOrPopulated(transactions)}

      {/* Details */}
      <CardDetails>
        <CardDetailsItem>
          <Label>Size:</Label>
          <Value loading={loading} skeletonWidth="sm">
            {size}
          </Value>
        </CardDetailsItem>
        <CardDetailsItem>
          <Label>Difficulty:</Label>
          <Value loading={loading} skeletonWidth="md">
            {difficulty}
          </Value>
        </CardDetailsItem>
        <CardDetailsItem>
          <Label>Miner:</Label>
          <Value loading={loading} truncate={true} skeletonWidth="lg">
            {miner}
          </Value>
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

export const CardTitle = styled.div`
  color: white;
`

export const CardNumber = styled.div`
  color: white;
`

export const CardDetails = styled.div``

export const CardDetailsItem = styled.div``

export default BlockCard
