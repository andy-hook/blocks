import React from "react"
import styled from "styled-components"
import { Web3BlockData } from "model"
import BlockCard from "@components/shared/block-card/block-card"
import { layout } from "@style/design-tokens"
import { BLOCK_COUNT } from "@utils"

interface Props {
  blockData?: Web3BlockData[] | null
}

const BlockList: React.FunctionComponent<Props> = ({ blockData }) => {
  const renderAsSkeletonOrPopulated = (block?: Web3BlockData | null) => {
    if (block) {
      return (
        <BlockCard
          blockNumber={block.number}
          size={block.size}
          difficulty={block.difficulty}
          miner={block.miner}
          transactions={block.transactionsData}
        />
      )
    } else {
      return <BlockCard loading={true} />
    }
  }

  // Render skeleton items while awaiting data
  const renderItems = () => {
    return Array.from(Array(BLOCK_COUNT)).map((_, index) => {
      return (
        <GridItem key={index}>
          {renderAsSkeletonOrPopulated(blockData && blockData[index])}
        </GridItem>
      )
    })
  }

  return <Grid>{renderItems()}</Grid>
}

export const Grid = styled.ul`
  display: grid;

  min-width: 0;

  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: ${layout.scale[12]};
`

export const GridItem = styled.li`
  background-color: red;
`

export default BlockList
