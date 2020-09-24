import React from "react"
import BlockInfo from "@components/block-info/block-info"
import TransactionTable from "@components/transaction-table/transaction-table"
import moment from "moment"
import Panel from "@components/panel/panel"
import Title from "@components/title/title"
import styled from "styled-components"
import {
  BlockWithTransactions,
  TransactionResponse,
} from "@ethersproject/abstract-provider"

interface Props {
  blockData?: BlockWithTransactions | null
  trxVisible: boolean
}

function formatUnixTime(timestamp: number) {
  return moment.unix(timestamp).format("dddd, MMMM Do, YYYY h:mm:ss A")
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
          size={`CHANGE ME`}
          difficulty={"CHANGE ME"}
          totalDifficulty={"CHANGE ME"}
          gasLimit={`CHANGE ME`}
          gasUsed={`CHANGE ME`}
          timestamp={formatUnixTime(blockData.timestamp)}
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
