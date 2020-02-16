import React, { memo } from "react"
import styled from "styled-components"
import BlockInfoRow from "./block-info-row/block-info-row"
import { appearance } from "@style/design-tokens"
import { themeForeground } from "@style/theme"
import Panel from "@components/shared/panel/panel"

interface Props {
  blockNumber?: string
  transactionCount?: string
  size?: string
  difficulty?: string
  totalDifficulty?: string
  gasLimit?: string
  gasUsed?: string
  loading?: boolean
  timestamp?: string
  miner?: string
}

const BlockInfo: React.FunctionComponent<Props> = memo(
  ({
    size,
    difficulty,
    totalDifficulty,
    gasUsed,
    gasLimit,
    loading,
    timestamp,
    miner,
  }) => {
    return (
      <Panel yPadding="lg" xPadding="lg">
        <InfoList>
          <Row name="Size" value={size} loading={loading} skeletonWidth="sm" />
          <Row
            name="Timestamp"
            value={timestamp}
            loading={loading}
            skeletonWidth="md"
          />
          <Row
            name="Miner"
            value={miner}
            loading={loading}
            skeletonWidth="md"
          />
          <Row
            name="Difficulty"
            value={difficulty}
            loading={loading}
            skeletonWidth="md"
          />
          <Row
            name="Total Difficulty"
            value={totalDifficulty}
            loading={loading}
            skeletonWidth="lg"
          />
          <Row
            name="Gas Used"
            value={gasUsed}
            loading={loading}
            skeletonWidth="md"
          />
          <Row
            name="Gas Limit"
            value={gasLimit}
            loading={loading}
            skeletonWidth="sm"
          />
        </InfoList>
      </Panel>
    )
  }
)

const InfoList = styled.ul``

const Row = styled(BlockInfoRow)`
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:first-child) {
    border-top: ${appearance.borderThickness.regular} solid
      ${themeForeground("extraLow")};
  }
`

export default BlockInfo
