import React, { memo } from "react"
import { Web3BlockData } from "model"
import BlockInfo from "@components/shared/block-info/block-info"
import { toString } from "lodash"
import TransactionTable from "@components/shared/transaction-table/transaction-table"
import moment from "moment"

interface Props {
  blockData?: Web3BlockData | null
  trxVisible: boolean
}

const BlockBody: React.FunctionComponent<Props> = memo(
  ({ blockData, trxVisible }) => {
    function formatUnixTime(timestamp: number) {
      return moment.unix(timestamp).format("dddd, MMMM Do, YYYY h:mm:ss A")
    }

    function renderInfoAsSkeletonOrPopulated() {
      if (blockData) {
        return trxVisible ? (
          <TransactionTable transactions={blockData.transactionsData} />
        ) : (
          <>
            <BlockInfo
              size={toString(blockData.size + "B")}
              difficulty={blockData.difficulty}
              totalDifficulty={blockData.totalDifficulty}
              gasLimit={toString(blockData.gasLimit)}
              gasUsed={toString(blockData.gasUsed)}
              timestamp={formatUnixTime(blockData.timestamp)}
              miner={blockData.miner}
            />
          </>
        )
      } else {
        return (
          <>
            <BlockInfo loading={true} />
          </>
        )
      }
    }

    return <>{renderInfoAsSkeletonOrPopulated()}</>
  }
)

export default BlockBody
