import React, { memo } from "react"
import styled from "styled-components"
import BlockInfoRow from "./block-info-row/block-info-row"
import { layout, appearance } from "@style/design-tokens"
import { themeText } from "@style/theme"
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
}

const BlockInfo: React.FunctionComponent<Props> = memo(
  ({ size, difficulty, totalDifficulty, gasUsed, gasLimit, loading }) => {
    return (
      <Panel yPadding="lg" xPadding="lg">
        <InfoList>
          <Row name="Size" value={size} loading={loading} skeletonWidth="sm" />
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

const InfoList = styled.ul`
  /* Sit optically flush against container */
  margin-top: -${layout.scale[8]};
  margin-bottom: -${layout.scale[8]};
`

const Row = styled(BlockInfoRow)`
  &:not(:first-child) {
    border-top: ${appearance.borderThickness.regular} solid ${themeText(1000)};
  }
`

export default BlockInfo
