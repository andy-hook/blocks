import React from "react"
import styled from "styled-components"
import { Web3BlockData } from "model"
import Card from "@components/shared/card/card"
import { layout } from "@style/design-tokens"
import { BLOCK_COUNT } from "@utils"
import { mq } from "@style/media-queries"

interface Props {
  blockData?: Web3BlockData[] | null
}

const BlockList: React.FunctionComponent<Props> = ({ blockData }) => {
  // Render skeleton items while awaiting data
  const renderItems = () => {
    return Array.from(Array(BLOCK_COUNT)).map((_, index) => {
      return (
        <GridItem key={index}>
          <GridItemOffset isEven={(index + 1) % 2 === 0}>
            <Card blockData={blockData && blockData[index]} />
          </GridItemOffset>
        </GridItem>
      )
    })
  }

  return <Grid>{renderItems()}</Grid>
}

const gridItemOffsetAmount = layout.scale[16]

const Grid = styled.ul`
  display: grid;

  min-width: 0;

  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-gap: ${layout.scale[9]};

  ${mq.greaterThan("topLap")`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: ${layout.scale[10]};

    padding-bottom: ${gridItemOffsetAmount};
  `}

  ${mq.greaterThan("topDesk")`
    grid-gap: ${layout.scale[11]};
  `}

  ${mq.greaterThan("topWide")`
    grid-gap: ${layout.scale[12]};
  `}

  ${mq.greaterThan("topWall")`
    grid-gap: ${layout.scale[13]};
  `}
`

const GridItem = styled.li``

const GridItemOffset = styled.div<{ isEven: boolean }>`
  ${props =>
    props.isEven &&
    mq.greaterThan("topLap")`
    position: relative;
    top: ${gridItemOffsetAmount};
  `};
`

export default BlockList
