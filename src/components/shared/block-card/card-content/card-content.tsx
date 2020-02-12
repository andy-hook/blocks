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
      <NumberLabel intensity="low">Block number</NumberLabel>
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
        <Button buttonType="secondary" to={`/blocks/${blockNumber}`}>
          More Details
        </Button>
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

const NumberLabel = styled(Label)`
  margin-bottom: ${layout.scale[5]};
`

const CardActions = styled.div`
  padding-top: ${layout.scale[9]};
`

export default CardContent
