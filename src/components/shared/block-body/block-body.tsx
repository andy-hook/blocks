import React from "react"
import { Web3BlockData, Web3TransactionData } from "model"
import BlockInfo from "@components/shared/block-info/block-info"
import { toString } from "lodash"
import TransactionTable from "@components/shared/transaction-table/transaction-table"
import moment from "moment"
import Panel from "@components/shared/panel/panel"
import Title from "@components/shared/title/title"
import styled from "styled-components"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"

interface Props {
  blockData?: Web3BlockData | null
  trxVisible: boolean
}

const BlockBody: React.FunctionComponent<Props> = ({
  blockData,
  trxVisible,
}) => {
  const { loading } = useLoadingStatusContext()
  function formatUnixTime(timestamp: number) {
    return moment.unix(timestamp).format("dddd, MMMM Do, YYYY h:mm:ss A")
  }

  function renderTransactionsOrEmptyState(transactions: Web3TransactionData[]) {
    return transactions.length > 0 ? (
      <TransactionTable transactions={transactions} />
    ) : (
      <BlockEmptyTransactions yPadding="lg">
        <Title size="sm" intensity="high">
          This block doesn't have any transactions&nbsp;&nbsp;&nbsp;:(
        </Title>
      </BlockEmptyTransactions>
    )
  }

  function renderInfoAsSkeletonOrPopulated() {
    if (loading) {
      return <BlockInfo loading={true} />
    } else if (blockData) {
      return trxVisible ? (
        renderTransactionsOrEmptyState(blockData.transactionsData)
      ) : (
        <BlockInfo
          size={toString(blockData.size + "B")}
          difficulty={blockData.difficulty}
          totalDifficulty={blockData.totalDifficulty}
          gasLimit={toString(blockData.gasLimit)}
          gasUsed={toString(blockData.gasUsed)}
          timestamp={formatUnixTime(blockData.timestamp)}
          miner={blockData.miner}
        />
      )
    }
  }

  return <>{renderInfoAsSkeletonOrPopulated()}</>
}

const BlockEmptyTransactions = styled(Panel)`
  display: flex;

  justify-content: center;
`

export default BlockBody
