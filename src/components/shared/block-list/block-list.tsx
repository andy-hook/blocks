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
  // Render skeleton items while awaiting data
  const renderItems = () => {
    return Array.from(Array(BLOCK_COUNT)).map((_, index) => {
      return (
        <GridItem key={index}>
          <BlockCard blockData={blockData && blockData[index]} />
        </GridItem>
      )
    })
  }

  return <Grid>{renderItems()}</Grid>
}

const Grid = styled.ul`
  display: grid;

  min-width: 0;

  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: ${layout.scale[13]};
`

const GridItem = styled.li``

export default BlockList
