import React from "react"
import CardContent from "./card-content/card-content"
import { BlockWithTransactions } from "@ethersproject/abstract-provider"
import styled from "styled-components"
import { dateFormat, toMs } from "@utils/date"

interface Props {
  blockData?: BlockWithTransactions | null
}

const Card: React.FunctionComponent<Props> = ({ blockData }) => {
  function renderAsSkeletonOrPopulated() {
    if (blockData) {
      return (
        <CardContent
          blockNumber={`${blockData.number}`}
          timestamp={dateFormat(toMs(blockData.timestamp), "onlyDate")}
          difficulty={`${blockData.difficulty}`}
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
