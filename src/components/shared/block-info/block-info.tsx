import React from "react"
import styled from "styled-components"
import BlockInfoRow from "./block-info-row/block-info-row"
import { appearance } from "@style/design-tokens"
import { themeForeground, themeBrand } from "@style/theme"
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

const BlockInfo: React.FunctionComponent<Props> = ({
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
    <InfoPanel yPadding="lg" xPadding="lg">
      <InfoList>
        <InfoRow
          name="Size"
          value={size}
          loading={loading}
          skeletonWidth="sm"
        />
        <InfoRow
          name="Timestamp"
          value={timestamp}
          loading={loading}
          skeletonWidth="lg"
        />
        <InfoRow
          name="Miner"
          value={miner}
          loading={loading}
          skeletonWidth="xl"
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
          skeletonWidth="sm"
        />
        <InfoRow
          name="Gas Limit"
          value={gasLimit}
          loading={loading}
          skeletonWidth="md"
        />
      </InfoList>
    </InfoPanel>
  )
}

const InfoPanel = styled(Panel)`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";

    position: absolute;

    bottom: 0;
    left: 0;

    background-color: ${themeBrand()};

    height: ${appearance.borderThickness.thickest};
    width: 100%;
  }
`

const InfoList = styled.ul``

const InfoRow = styled(BlockInfoRow)`
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
