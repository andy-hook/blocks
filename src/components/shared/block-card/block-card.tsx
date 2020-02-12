import React from "react"
import { Web3BlockData } from "model"
import CardContent from "./card-content/card-content"
import styled from "styled-components"
import { themeTone } from "@style/theme"

interface Props {
  blockData?: Web3BlockData | null
}

const BlockCard: React.FunctionComponent<Props> = ({ blockData }) => {
  const renderAsSkeletonOrPopulated = () => {
    if (blockData) {
      return (
        <CardContent
          blockNumber={blockData.number}
          size={blockData.size}
          difficulty={blockData.difficulty}
          miner={blockData.miner}
          transactions={blockData.transactionsData}
        />
      )
    } else {
      return <CardContent loading={true} />
    }
  }

  return <Card>{renderAsSkeletonOrPopulated()}</Card>
}

const Card = styled.div`
  background-color: ${themeTone(500)};
`

export default BlockCard
