import React from "react"
import CardContent from "./card-content/card-content"
import { BlockWithTransactions } from "@ethersproject/abstract-provider"
import styled from "styled-components"

interface Props {
  blockData?: BlockWithTransactions | null
}

const Card: React.FunctionComponent<Props> = ({ blockData }) => {
  function renderAsSkeletonOrPopulated() {
    if (blockData) {
      // TODO: Change size and difficulty
      return (
        <CardContent
          blockNumber={`${blockData.number}`}
          size="CHANGE ME"
          difficulty="CHANGE ME"
          miner={blockData.miner}
          transactionCount={blockData.transactions.length}
          transactions={blockData.transactions}
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
