import React, { memo } from "react"
import styled from "styled-components"
import Title from "@components/shared/title/title"
import Label from "@components/shared/label/label"
import { layout } from "@style/design-tokens"
import BlockHeaderSwitch from "./block-header-switch/block-header-switch"
import Panel from "@components/shared/panel/panel"
import Button from "@components/shared/button/button"

interface Props {
  blockNumber?: string
  transactionCount?: string
  loading?: boolean
  handleDetailsClick?: () => void
  handleTransactionsClick?: () => void
}

const BlockHeader: React.FunctionComponent<Props> = ({
  blockNumber,
  transactionCount,
  loading,
  handleDetailsClick,
  handleTransactionsClick,
}) => {
  return (
    <Container>
      <Button to="/" buttonType="tertiary" icon="arrow-left">
        All Blocks
      </Button>
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
        <BlockHeaderSwitch
          onDetailsClock={handleDetailsClick}
          onTransactionsClick={handleTransactionsClick}
        />
      </Header>
    </Container>
  )
}

const Container = styled(Panel)`
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

export default memo(BlockHeader)
