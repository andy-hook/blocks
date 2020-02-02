import React from "react"
import Gutter from "../gutter/gutter"
import Limiter from "../limiter/limiter"
import styled from "styled-components"
import { typeTitle } from "@style/typography"
import { Web3BlockData } from "model"
import BlockItem from "@components/shared/block-item/block-item"

interface Props {
  blocks: Web3BlockData[]
}

const BlockList: React.FunctionComponent<Props> = ({ blocks }) => {
  const blocksToRender = blocks.map((ItemData, index) => {
    return (
      <BlockItem
        key={index}
        blockNumber={ItemData.number}
        transactions={ItemData.transactions}
      />
    )
  })

  return (
    <Container>
      <Gutter>
        <Limiter>{blocksToRender}</Limiter>
      </Gutter>
    </Container>
  )
}

export const Container = styled.footer`
  ${typeTitle}
`

export default BlockList
