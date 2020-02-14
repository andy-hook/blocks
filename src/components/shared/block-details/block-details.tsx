import React from "react"
import { Web3BlockData } from "model"
import { toString } from "lodash"
import styled from "styled-components"
import BlockInfoList from "./block-info-list/block-info-list"
import BlockHeader from "./block-header/block-header"

interface Props {
  blockData?: Web3BlockData | null
}

const BlockDetails: React.FunctionComponent<Props> = ({ blockData }) => {
  const renderHeaderAsSkeletonOrPopulated = () => {
    if (blockData) {
      return (
        <BlockHeader
          blockNumber={toString(blockData.number)}
          transactionCount={toString(blockData.transactionCount)}
        />
      )
    } else {
      return <BlockHeader loading={true} />
    }
  }

  const renderInfoListAsSkeletonOrPopulated = () => {
    if (blockData) {
      return (
        <BlockInfoList
          size={toString(blockData.size + "B")}
          difficulty={blockData.difficulty}
          totalDifficulty={blockData.totalDifficulty}
          gasLimit={toString(blockData.gasLimit)}
          gasUsed={toString(blockData.gasUsed)}
        />
      )
    } else {
      return <BlockInfoList loading={true} />
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

export default BlockDetails
