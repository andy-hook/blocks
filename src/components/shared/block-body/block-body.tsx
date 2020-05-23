import React from "react"
import { Web3BlockData, Web3TransactionData } from "model"
import BlockInfo from "@components/shared/block-info/block-info"
import { toString } from "lodash"
import TransactionTable from "@components/shared/transaction-table/transaction-table"
import moment from "moment"
import Panel from "@components/shared/panel/panel"
import Title from "@components/shared/title/title"
import styled from "styled-components"

interface Props {
  blockData?: Web3BlockData | null
  trxVisible: boolean
}

const TransactionsList: React.FunctionComponent<{
  transactions: Web3TransactionData[]
}> = ({ transactions }) => {
  return (
    <>
      {transactions.length > 0 ? (
        <TransactionTable transactions={transactions} />
      ) : (
        <BlockEmptyTransactions yPadding="lg">
          <Title size="sm" intensity="high">
            This block doesn't have any transactions&nbsp;&nbsp;&nbsp;:(
          </Title>
        </BlockEmptyTransactions>
      )}
    </>
  )
}

const BlockBody: React.FunctionComponent<Props> = ({
  blockData,
  trxVisible,
}) => {
  function formatUnixTime(timestamp: number) {
    return moment.unix(timestamp).format("dddd, MMMM Do, YYYY h:mm:ss A")
  }

  function renderInfoAsSkeletonOrPopulated() {
    if (blockData) {
      return trxVisible ? (
        <TransactionsList transactions={blockData.transactionsData} />
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
