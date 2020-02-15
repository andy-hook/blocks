import React, { memo } from "react"
import styled from "styled-components"

interface Props {
  onDetailsClock?: () => void
  onTransactionsClick?: () => void
}

const BlockHeaderSwitch: React.FunctionComponent<Props> = ({
  onDetailsClock,
  onTransactionsClick,
}) => {
  return (
    <Container>
      <DetailsButton onClick={onDetailsClock}>Details</DetailsButton>
      <TransactionsButton onClick={onTransactionsClick}>
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

export default memo(BlockHeaderSwitch)
