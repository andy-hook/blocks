import React from "react"
import styled from "styled-components"

interface Props {
  handleDetailsClick?: () => void
  handleTransactionsClick?: () => void
}

const BlockSingleSwitch: React.FunctionComponent<Props> = ({
  handleDetailsClick,
  handleTransactionsClick,
}) => {
  return (
    <Container>
      <DetailsButton onClick={handleDetailsClick}>Details</DetailsButton>
      <TransactionsButton onClick={handleTransactionsClick}>
        Transactions
      </TransactionsButton>
    </Container>
  )
}

const Container = styled.section`
  background-color: blue;
`

const DetailsButton = styled.button``

const TransactionsButton = styled.button``

export default BlockSingleSwitch
