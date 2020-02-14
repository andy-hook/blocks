import React from "react"
import styled from "styled-components"
import BlockSingleTrxRow from "./block-single-trx-row/block-single-trx-row"
import { layout, appearance } from "@style/design-tokens"
import { themeText, themeTone } from "@style/theme"
import { Web3BlockData } from "model"

interface Props {
  transactions: Web3BlockData["transactionsData"]
}

const BlockSingleTrx: React.FunctionComponent<Props> = ({ transactions }) => {
  // Renders items
  const renderItems = () => {
    return transactions.map((trx, index) => {
      return (
        <Row
          key={index}
          blockNumber={trx.blockNumber}
          trxHash={trx.hash}
          from={trx.from}
          to={trx.to}
          value={trx.value}
        />
      )
    })
  }

  return (
    <Container>
      <InfoList>{renderItems()}</InfoList>
    </Container>
  )
}

const Container = styled.section`
  padding: ${layout.scale[11]};
  background-color: ${themeTone(500)};
`

const InfoList = styled.ul`
  /* Sit optically flush against container */
  margin-top: -${layout.scale[8]};
  margin-bottom: -${layout.scale[8]};
`

const Row = styled(BlockSingleTrxRow)`
  &:not(:first-child) {
    border-top: ${appearance.borderThickness.regular} solid ${themeText(1000)};
  }
`

export default BlockSingleTrx
