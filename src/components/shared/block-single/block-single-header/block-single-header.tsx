import React from "react"
import styled from "styled-components"
import Title from "@components/shared/title/title"
import Label from "@components/shared/label/label"
import { layout } from "@style/design-tokens"
import { themeTone } from "@style/theme"
import BlockSingleSwitch from "./block-single-switch/block-single-switch"

interface Props {
  blockNumber?: string
  transactionCount?: string
  loading?: boolean
  handleDetailsClick?: () => void
  handleTransactionsClick?: () => void
}

const BlockSingleHeader: React.FunctionComponent<Props> = ({
  blockNumber,
  transactionCount,
  loading,
  handleDetailsClick,
  handleTransactionsClick,
}) => {
  return (
    <Container>
      <Header>
        <DetailCouple>
          <TransactionCountLabel intensity="low" size="lg" loading={loading}>
            {transactionCount} Transactions
          </TransactionCountLabel>
          <Title
            intensity="high"
            size="lg"
            loading={loading}
            skeletonWidth="sm"
          >
            &#x23;&nbsp;{blockNumber}
          </Title>
        </DetailCouple>
        <BlockSingleSwitch
          handleDetailsClick={handleDetailsClick}
          handleTransactionsClick={handleTransactionsClick}
        />
      </Header>
    </Container>
  )
}

const Container = styled.div`
  padding: ${layout.scale[11]};
  background-color: ${themeTone(500)};
  margin-bottom: ${layout.scale[8]};
`

const Header = styled.header`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;
`

const TransactionCountLabel = styled(Label)`
  margin-bottom: ${layout.scale[4]};
`

const DetailCouple = styled.div`
  width: 50%;
  padding-top: ${layout.scale[12]};
  padding-left: ${layout.scale[12]};
`

export default BlockSingleHeader
