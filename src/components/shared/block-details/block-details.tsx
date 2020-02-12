import React from "react"
import { Web3BlockData } from "model"
import BlockContent from "./block-content/block-content"
import { toString } from "lodash"

interface Props {
  blockData?: Web3BlockData | null
}

const BlockDetails: React.FunctionComponent<Props> = ({ blockData }) => {
  const renderAsSkeletonOrPopulated = () => {
    if (blockData) {
      return (
        <BlockContent
          blockNumber={toString(blockData.number)}
          transactionCount={toString(blockData.transactionCount)}
          size={toString(blockData.size + "B")}
          difficulty={blockData.difficulty}
          totalDifficulty={blockData.totalDifficulty}
          gasLimit={toString(blockData.gasLimit)}
          gasUsed={toString(blockData.gasUsed)}
        />
      )
    } else {
      return <BlockContent loading={true} />
    }
  }

  return <>{renderAsSkeletonOrPopulated()}</>
}

export default BlockDetails
