import React, { memo } from "react"
import { Web3BlockData } from "model"
import CardTrxSummary from "@components/shared/card/card-trx-summary/card-trx-summary"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import Label from "@components/shared/label/label"
import CardDetails from "../card-details/card-details"
import Title from "@components/shared/title/title"
import Button from "@components/shared/button/button"
import { mq } from "@style/media-queries"
import Panel from "@components/shared/panel/panel"

interface Props {
  blockNumber?: string
  transactions?: Web3BlockData["transactionsData"]
  transactionCount?: number
  size?: string
  difficulty?: string
  miner?: string
  loading?: boolean
}

const CardContent: React.FunctionComponent<Props> = memo(
  ({
    blockNumber,
    transactions,
    size,
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
          size={size}
          difficulty={difficulty}
          miner={miner}
          loading={loading}
        />

        {/* CTA */}
        <CardActions>
          <CardButton
            disabled={loading}
            buttonType="secondary"
            to={`/block/${blockNumber}`}
          >
            More details
          </CardButton>
        </CardActions>
      </Panel>
    )
  }
)

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
