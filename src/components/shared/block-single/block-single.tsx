import React from "react"
import { Web3BlockData } from "model"
import { toString } from "lodash"
import styled from "styled-components"
import BlockSingleInfo from "./block-single-info/block-single-info"
import BlockSingleHeader from "./block-single-header/block-single-header"

interface Props {
  blockData?: Web3BlockData | null
}

const BlockSingle: React.FunctionComponent<Props> = ({ blockData }) => {
  const renderHeaderAsSkeletonOrPopulated = () => {
    if (blockData) {
      return (
        <BlockSingleHeader
          blockNumber={toString(blockData.number)}
          transactionCount={toString(blockData.transactionCount)}
        />
      )
    } else {
      return <BlockSingleHeader loading={true} />
    }
  }

  const renderInfoListAsSkeletonOrPopulated = () => {
    if (blockData) {
      return (
        <BlockSingleInfo
          size={toString(blockData.size + "B")}
          difficulty={blockData.difficulty}
          totalDifficulty={blockData.totalDifficulty}
          gasLimit={toString(blockData.gasLimit)}
          gasUsed={toString(blockData.gasUsed)}
        />
      )
    } else {
      return <BlockSingleInfo loading={true} />
    }
  }

  return (
    <Container>
      {renderHeaderAsSkeletonOrPopulated()}
      {renderInfoListAsSkeletonOrPopulated()}
    </Container>
  )
}

const Container = styled.article``

export default BlockSingle
