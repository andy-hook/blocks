import React from "react"
import { Web3BlockData } from "model"
import BlockSingleInfo from "../block-single-info/block-single-info"
import { toString } from "lodash"
import BlockSingleTrx from "../block-single-trx/block-single-trx"

interface Props {
  blockData?: Web3BlockData | null
}

const BlockSingleBody: React.FunctionComponent<Props> = ({ blockData }) => {
  const renderInfoAsSkeletonOrPopulated = () => {
    if (blockData) {
      return (
        <>
          <BlockSingleInfo
            size={toString(blockData.size + "B")}
            difficulty={blockData.difficulty}
            totalDifficulty={blockData.totalDifficulty}
            gasLimit={toString(blockData.gasLimit)}
            gasUsed={toString(blockData.gasUsed)}
          />
          <BlockSingleTrx
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
          <BlockSingleInfo loading={true} />
          <BlockSingleTrx loading={true} />
        </>
      )
    }
  }

  return <>{renderInfoAsSkeletonOrPopulated()}</>
}

export default BlockSingleBody
