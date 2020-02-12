import React from "react"
import { Web3BlockData } from "model"
import CardContent from "./card-content/card-content"

interface Props {
  blockData?: Web3BlockData | null
}

const BlockCard: React.FunctionComponent<Props> = ({ blockData }) => {
  return blockData ? (
    <CardContent
      blockNumber={blockData.number}
      size={blockData.size}
      difficulty={blockData.difficulty}
      miner={blockData.miner}
      transactions={blockData.transactionsData}
    />
  ) : (
    <CardContent loading={true} />
  )
}

export default BlockCard
