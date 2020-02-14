import React from "react"
import { Web3BlockData } from "model"
import BlockInfo from "@components/shared/block-info/block-info"
import { toString } from "lodash"
import BlockSingleTrx from "./block-single-trx/block-single-trx"

interface Props {
  blockData?: Web3BlockData | null
  trxVisible: boolean
}

const BlockBody: React.FunctionComponent<Props> = ({
  blockData,
  trxVisible,
}) => {
  const renderInfoAsSkeletonOrPopulated = () => {
    if (blockData) {
      return trxVisible ? (
        <BlockSingleTrx transactions={blockData.transactionsData} />
      ) : (
        <BlockInfo
          size={toString(blockData.size + "B")}
          difficulty={blockData.difficulty}
          totalDifficulty={blockData.totalDifficulty}
          gasLimit={toString(blockData.gasLimit)}
          gasUsed={toString(blockData.gasUsed)}
        />
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
