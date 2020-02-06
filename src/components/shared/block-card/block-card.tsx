import React from "react"
import { Web3BlockData } from "model"
import { Link } from "gatsby"
import TransactionsSummary from "@components/shared/block-card/transactions-summary/transactions-summary"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import LabelText from "@components/shared/label-text/label-text"

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
      return <TransactionsSummary />
    }
  }

  return (
    <Card>
      {/* Title info */}
      <LabelText>Block number</LabelText>
      <LabelText loading={loading} skeletonWidth="xl">
        {blockNumber}
      </LabelText>

      {/* Transactions */}

      {renderTrxAsPlaceholderOrPopulated(transactions)}

      {/* Details */}
      <CardDetails>
        <CardDetailsItem>
          Size:{" "}
          <LabelText loading={loading} skeletonWidth="xs">
            {size}
          </LabelText>
        </CardDetailsItem>
        <CardDetailsItem>
          Difficulty:{" "}
          <LabelText loading={loading} skeletonWidth="md">
            {difficulty}
          </LabelText>
        </CardDetailsItem>
        <CardDetailsItem>
          Miner:{" "}
          <LabelText loading={loading} truncate={true} skeletonWidth="lg">
            {miner}
          </LabelText>
        </CardDetailsItem>
      </CardDetails>

      {/* CTA */}
      <Link to={`/blocks/${blockNumber}`}>Go to block {blockNumber}</Link>
    </Card>
  )
}

export const Card = styled.div`
  padding: ${layout.scale[9]};
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
