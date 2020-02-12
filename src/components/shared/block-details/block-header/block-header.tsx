import React from "react"
import styled from "styled-components"
import Title from "@components/shared/title/title"
import Label from "@components/shared/label/label"
import { layout } from "@style/design-tokens"
import Button from "@components/shared/button/button"

interface Props {
  blockNumber?: string
  transactionCount?: string
  loading?: boolean
}

const BlockHeader: React.FunctionComponent<Props> = ({
  blockNumber,
  transactionCount,
  loading,
}) => {
  return (
    <Header>
      <DetailCouple>
        <NumberTitle
          intensity="high"
          size="lg"
          loading={loading}
          skeletonWidth="sm"
        >
          &#x23;&nbsp;{blockNumber}
        </NumberTitle>
        <Label intensity="low" size="lg" loading={loading}>
          {transactionCount} Transactions
        </Label>
      </DetailCouple>
      <Button to="https://www.google.com">View transactions</Button>
      {/* {transactionCount}
      {loading} */}
    </Header>
  )
}

const Header = styled.header`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  padding-bottom: ${layout.scale[6]};
  margin-bottom: ${layout.scale[8]};
`

const NumberTitle = styled(Title)`
  margin-bottom: ${layout.scale[3]};
`

const DetailCouple = styled.div`
  width: 50%;
  padding-top: ${layout.scale[12]};
  padding-left: ${layout.scale[12]};
`

export default BlockHeader
