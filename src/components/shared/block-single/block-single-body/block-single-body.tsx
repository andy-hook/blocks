import React from "react"
import { Web3BlockData } from "model"
import BlockSingleInfo from "./block-single-info/block-single-info"
import { toString } from "lodash"
import BlockSingleTrx from "./block-single-trx/block-single-trx"

interface Props {
  blockData?: Web3BlockData | null
  trxVisible: boolean
}

const BlockSingleBody: React.FunctionComponent<Props> = ({
  blockData,
  trxVisible,
}) => {
  const renderInfoAsSkeletonOrPopulated = () => {
    if (blockData) {
      return trxVisible ? (
        <BlockSingleTrx transactions={blockData.transactionsData} />
      ) : (
        <BlockSingleInfo
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
          <BlockSingleInfo loading={true} />
        </>
      )
    }
  }

  return <>{renderInfoAsSkeletonOrPopulated()}</>
}

export default BlockSingleBody
