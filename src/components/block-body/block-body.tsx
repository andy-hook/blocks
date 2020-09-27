import React from "react"
import BlockInfo from "@components/block-info/block-info"
import TransactionTable from "@components/transaction-table/transaction-table"
import Panel from "@components/panel/panel"
import Title from "@components/title/title"
import styled from "styled-components"
import {
  BlockWithTransactions,
  TransactionResponse,
} from "@ethersproject/abstract-provider"
import { dateFormat, toMs } from "@utils/date"

interface Props {
  blockData?: BlockWithTransactions | null
  trxVisible: boolean
}

const BlockBody: React.FunctionComponent<Props> = ({
  blockData,
  trxVisible,
}) => {
  function renderTransactionsOrEmptyState(transactions: TransactionResponse[]) {
    return transactions.length > 0 ? (
      <TransactionTable transactions={transactions} />
    ) : (
      <BlockEmptyTransactions yPadding="lg">
        <Title size="sm" intensity="high">
          This block doesn&apos;t have any transactions&nbsp;&nbsp;&nbsp;:(
        </Title>
      </BlockEmptyTransactions>
    )
  }

  function renderInfoAsSkeletonOrPopulated() {
    if (blockData) {
      return trxVisible ? (
        renderTransactionsOrEmptyState(blockData.transactions)
      ) : (
        // TODO: Update these values
        <BlockInfo
          hash={`${blockData.hash}`}
          difficulty={`${blockData.difficulty}`}
          gasLimit={`${blockData.gasLimit.toString()}`}
          gasUsed={`${blockData.gasUsed.toString()}`}
          timestamp={dateFormat(toMs(blockData.timestamp), "extended")}
          miner={blockData.miner}
        />
      )
    } else {
      return <BlockInfo loading={true} />
    }
  }

  return <>{renderInfoAsSkeletonOrPopulated()}</>
}

const BlockEmptyTransactions = styled(Panel)`
  display: flex;

  justify-content: center;
`

export default BlockBody
