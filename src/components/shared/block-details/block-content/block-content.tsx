import React from "react"
import styled from "styled-components"
import BlockInfoRow from "../block-info-row/block-info-row"
import { layout, appearance } from "@style/design-tokens"
import BlockHeader from "../block-header/block-header"
import { themeText } from "@style/theme"

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
      <BlockHeader
        transactionCount={transactionCount}
        blockNumber={blockNumber}
        loading={loading}
      />
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

const Container = styled.article`
  padding: ${layout.scale[11]};
`

const InfoList = styled.ul``

const InfoRow = styled(BlockInfoRow)`
  border-top: ${appearance.borderThickness.regular} solid ${themeText(1000)};

  /* Sit optically flush against container */
  &:last-child {
    padding-bottom: 0;
  }
`

export default BlockContent
