import React from "react"
import styled from "styled-components"
import BlockInfoRow from "../block-info-row/block-info-row"
import { themeTone } from "@style/theme"

interface Props {
  blockNumber?: string
  transactionCount?: string
  size?: string
  difficulty?: string
  totalDifficulty?: string
  gasLimit?: string
  gasUsed?: string
  loading?: boolean
}

const BlockContent: React.FunctionComponent<Props> = ({
  blockNumber,
  transactionCount,
  size,
  difficulty,
  totalDifficulty,
  gasUsed,
  gasLimit,
  loading,
}) => {
  return (
    <Container>
      Block number {blockNumber}
      {transactionCount} Transactions
      <InfoList>
        <InfoRow
          name="Size"
          value={size}
          loading={loading}
          skeletonWidth="sm"
        />
        <InfoRow
          name="Difficulty"
          value={difficulty}
          loading={loading}
          skeletonWidth="md"
        />
        <InfoRow
          name="Total Difficulty"
          value={totalDifficulty}
          loading={loading}
          skeletonWidth="lg"
        />
        <InfoRow
          name="Gas Used"
          value={gasUsed}
          loading={loading}
          skeletonWidth="md"
        />
        <InfoRow
          name="Gas Limit"
          value={gasLimit}
          loading={loading}
          skeletonWidth="sm"
        />
      </InfoList>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${themeTone(300)};
  background-color: red;

  height: 500px;
`

const InfoList = styled.ul``

const InfoRow = styled(BlockInfoRow)`
  border-top: 1px solid black;
`

export default BlockContent
