import React from "react"
import { Web3TransactionData } from "model"
import CardTrxPip from "@components/shared/card/card-trx-pip/card-trx-pip"
import styled from "styled-components"
import { layout, appearance } from "@style/design-tokens"
import { themeForeground } from "@style/theme"
import { mq } from "@style/media-queries"
import { SUMMARY_MAX_TRANSACTIONS } from "../../../../config"

interface Props {
  transactions?: Web3TransactionData[]
  loading?: boolean
}

const CardTrxSummary: React.FunctionComponent<Props> = ({
  transactions,
  loading,
}) => {
  function renderAsHolderOrPopulated(transaction?: Web3TransactionData) {
    if (transaction) {
      return (
        <CardTrxPip
          value={transaction.ether}
          from={transaction.from}
          to={transaction.to}
        />
      )
    } else {
      return <CardTrxPip isEmpty={true} />
    }
  }

  // Renders items
  function renderItems() {
    return Array.from(Array(SUMMARY_MAX_TRANSACTIONS)).map((_, index) => {
      return (
        <GridItem key={index}>
          {loading ? (
            <CardTrxPip loading={true} />
          ) : (
            renderAsHolderOrPopulated(transactions && transactions[index])
          )}
        </GridItem>
      )
    })
  }

  return (
    <GridContainer>
      <Grid>{renderItems()}</Grid>
    </GridContainer>
  )
}

const GridContainer = styled.div`
  padding-top: ${layout.scale[7]};
  padding-bottom: ${layout.scale[7]};
  margin-bottom: ${layout.scale[7]};

  border-bottom: ${appearance.borderThickness.regular} solid
    ${themeForeground("extraLow")};
`

const Grid = styled.ul`
  position: relative;

  display: flex;
  flex-wrap: wrap;

  margin: -${layout.scale[1]};

  ${mq.greaterThan("topDesk")`
    max-width: 90%;
  `}
`

const GridItem = styled.li``

export default CardTrxSummary
