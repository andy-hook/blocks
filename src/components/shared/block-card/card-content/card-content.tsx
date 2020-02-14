import React from "react"
import { Web3BlockData } from "model"
import TransactionsSummary from "@components/shared/block-card/transactions-summary/transactions-summary"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import Label from "@components/shared/label/label"
import CardDetails from "../card-details/card-details"
import Title from "@components/shared/title/title"
import Button from "@components/shared/button/button"
import { mq } from "@style/media-queries"

interface Props {
  blockNumber?: string
  transactions?: Web3BlockData["transactionsData"]
  transactionCount?: number
  size?: string
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
  transactionCount,
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
      <TransactionsCountLabel intensity="low" loading={loading}>
        {transactionCount} Transactions
      </TransactionsCountLabel>
      <Title intensity="high" loading={loading} skeletonWidth="sm">
        &#x23;&nbsp;{blockNumber}
      </Title>

      {/* Transactions */}
      {renderTrxAsPlaceholderOrPopulated(transactions)}

      {/* Details */}
      <CardDetails
        size={size}
        difficulty={difficulty}
        miner={miner}
        loading={loading}
      />

      {/* CTA */}
      <CardActions>
        <CardButton buttonType="secondary" to={`/blocks/${blockNumber}`}>
          More Details
        </CardButton>
      </CardActions>
    </Card>
  )
}

const Card = styled.div`
  padding: ${layout.scale[7]};

  ${mq.greaterThan("topPalm")`
    padding: ${layout.scale[9]};
  `}

  ${mq.greaterThan("topLap")`
    padding: ${layout.scale[8]};
  `}

  ${mq.greaterThan("topWide")`
    padding: ${layout.scale[9]};
  `}

  ${mq.greaterThan("topWall")`
    padding: ${layout.scale[10]};
  `}
`

const TransactionsCountLabel = styled(Label)`
  margin-bottom: ${layout.scale[5]};
`

const CardActions = styled.div`
  padding-top: ${layout.scale[9]};
`

const CardButton = styled(Button)`
  ${mq.lessThan("bottomDesk")`
    width: 100%;
  `}
`

export default CardContent
