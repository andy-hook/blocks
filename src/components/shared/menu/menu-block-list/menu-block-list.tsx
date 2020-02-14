import React, { memo } from "react"
import { Web3BlockData } from "model"
import styled from "styled-components"
import { themeText } from "@style/theme"

interface Props {
  open: boolean
  onClick: () => void
  blockData?: Web3BlockData[] | null
}

const MenuBlockList: React.FunctionComponent<Props> = memo(({ blockData }) => {
  function renderItems() {
    if (blockData) {
      return blockData.map((block, index) => {
        return (
          <Item key={index}>
            {block.number}
            <br />
            {block.transactionCount}
          </Item>
        )
      })
    }
  }

  return <>{renderItems()}</>
})

export const Item = styled.div`
  color: ${themeText(100)};
`

export default MenuBlockList
