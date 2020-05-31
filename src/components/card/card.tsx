import React from "react"
import { Web3BlockData } from "model"
import CardContent from "./card-content/card-content"
import styled from "styled-components"

interface Props {
  blockData?: Web3BlockData | null
}

const Card: React.FunctionComponent<Props> = ({ blockData }) => {
  function renderAsSkeletonOrPopulated() {
    if (blockData) {
      return (
        <CardContent
          blockNumber={`${blockData.number}`}
          size={`${blockData.size}`}
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
}

const CardContainer = styled.div``

export default Card
