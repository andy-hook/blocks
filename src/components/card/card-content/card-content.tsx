import React from "react"
import CardTrxSummary from "@components/card/card-trx-summary/card-trx-summary"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import Label from "@components/label/label"
import CardDetails from "../card-details/card-details"
import Title from "@components/title/title"
import Button from "@components/button/button"
import { mq } from "@style/media-queries"
import Panel from "@components/panel/panel"
import { TransactionResponse } from "@ethersproject/abstract-provider"

interface Props {
  blockNumber?: string
  transactions?: TransactionResponse[]
  transactionCount?: number
  timestamp?: string
  difficulty?: string
  miner?: string
  loading?: boolean
}

const CardContent: React.FunctionComponent<Props> = ({
  blockNumber,
  transactions,
  timestamp,
  difficulty,
  miner,
  loading,
  transactionCount,
}) => {
  function renderTrxAsPlaceholderOrPopulated(
    blockTransactions: Props["transactions"]
  ) {
    if (blockTransactions) {
      return <CardTrxSummary transactions={blockTransactions} />
    } else {
      return <CardTrxSummary loading={true} />
    }
  }

  return (
    <Panel>
      {/* Title info */}
      <TransactionsCountLabel intensity="low" loading={loading}>
        {transactionCount} Transactions
      </TransactionsCountLabel>

      <h2>
        <Title intensity="high" loading={loading} skeletonWidth="md">
          &#x23;&nbsp;{blockNumber}
        </Title>
      </h2>

      {/* Transactions */}
      {renderTrxAsPlaceholderOrPopulated(transactions)}

      {/* Details */}
      <CardDetails
        timestamp={timestamp}
        difficulty={difficulty}
        miner={miner}
        loading={loading}
      />

      {/* CTA */}
      <CardActions>
        <CardButton
          disabled={loading}
          buttonType="secondary"
          to={blockNumber ? `/block/${blockNumber}` : ""}
        >
          More details
        </CardButton>
      </CardActions>
    </Panel>
  )
}

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
