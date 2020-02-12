import React from "react"
import styled from "styled-components"
import Label from "@components/shared/label/label"
import { layout } from "@style/design-tokens"
import TruncateString from "react-truncate-string"

interface Props {
  size?: number
  difficulty?: string
  miner?: string
  loading?: boolean
}

const CardDetails: React.FunctionComponent<Props> = ({
  size,
  difficulty,
  miner,
  loading,
}) => {
  return (
    <Details>
      <SizeItem>
        <DetailsTitle intensity="low">Size:</DetailsTitle>
        <Label loading={loading} skeletonWidth="sm">
          {size}
        </Label>
      </SizeItem>
      <DifficultyItem>
        <DetailsTitle intensity="low">Difficulty:</DetailsTitle>
        <Label loading={loading} skeletonWidth="md">
          {difficulty}
        </Label>
      </DifficultyItem>
      <MinerItem>
        <DetailsTitle intensity="low">Miner:</DetailsTitle>
        <Label loading={loading} skeletonWidth="lg">
          <TruncateString text={miner} truncateAt={40} />
        </Label>
      </MinerItem>
    </Details>
  )
}

const Details = styled.div`
  display: flex;
`

const DetailsTitle = styled(Label)`
  margin-bottom: ${layout.scale[2]};
`

const SizeItem = styled.div`
  width: 16%;
`

const DifficultyItem = styled.div`
  width: 34%;
`

const MinerItem = styled.div`
  width: 40%;
`

export default CardDetails
