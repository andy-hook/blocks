import React from "react"
import { Web3BlockData } from "model"
import BlockInfo from "@components/shared/block-info/block-info"
import { toString } from "lodash"
import TransactionTable from "@components/shared/transaction-table/transaction-table"

interface Props {
  blockData?: Web3BlockData | null
  trxVisible: boolean
}

const BlockBody: React.FunctionComponent<Props> = ({
  blockData,
  trxVisible,
}) => {
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

export default BlockBody
