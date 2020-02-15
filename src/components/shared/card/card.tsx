import React, { memo } from "react"
import { Web3BlockData } from "model"
import CardContent from "./card-content/card-content"
import styled from "styled-components"
import { toString } from "lodash"

interface Props {
  blockData?: Web3BlockData | null
}

const Card: React.FunctionComponent<Props> = memo(({ blockData }) => {
  function renderAsSkeletonOrPopulated() {
    if (blockData) {
      return (
        <CardContent
          blockNumber={toString(blockData.number)}
          size={toString(blockData.size)}
          difficulty={blockData.difficulty}
          miner={blockData.miner}
          transactionCount={blockData.transactionCount}
          transactions={blockData.transactionsData}
        />
      )
    } else {
      return <CardContent loading={true} />
    }
  }

  return <CardContainer>{renderAsSkeletonOrPopulated()}</CardContainer>
})

const CardContainer = styled.div``

export default Card
