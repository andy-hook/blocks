import React from "react"
import { Web3BlockData, Web3TransactionData } from "model"
import BlockInfo from "@components/block-info/block-info"
import TransactionTable from "@components/transaction-table/transaction-table"
import moment from "moment"
import Panel from "@components/panel/panel"
import Title from "@components/title/title"
import styled from "styled-components"

interface Props {
  blockData?: Web3BlockData | null
  trxVisible: boolean
}

function formatUnixTime(timestamp: number) {
  return moment.unix(timestamp).format("dddd, MMMM Do, YYYY h:mm:ss A")
}

const BlockBody: React.FunctionComponent<Props> = ({
  blockData,
  trxVisible,
}) => {
  function renderTransactionsOrEmptyState(transactions: Web3TransactionData[]) {
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
        renderTransactionsOrEmptyState(blockData.transactionsData)
      ) : (
        <BlockInfo
          size={`${blockData.size}B`}
          difficulty={blockData.difficulty}
          totalDifficulty={blockData.totalDifficulty}
          gasLimit={`${blockData.gasLimit}`}
          gasUsed={`${blockData.gasUsed}`}
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
