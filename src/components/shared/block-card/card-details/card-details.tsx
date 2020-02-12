import React from "react"
import styled from "styled-components"
import Label from "@components/shared/label/label"
import { layout } from "@style/design-tokens"

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
      <DetailsItem>
        <DetailsTitle intensity="low">Size:</DetailsTitle>
        <Label loading={loading} skeletonWidth="sm">
          {size}
        </Label>
      </DetailsItem>
      <DetailsItem>
        <DetailsTitle intensity="low">Difficulty:</DetailsTitle>
        <Label loading={loading} skeletonWidth="md">
          {difficulty}
        </Label>
      </DetailsItem>
      <DetailsItem>
        <DetailsTitle intensity="low">Miner:</DetailsTitle>
        <Label loading={loading} skeletonWidth="lg">
          {miner}
        </Label>
      </DetailsItem>
    </Details>
  )
}

const Details = styled.div`
  display: flex;

  border-top: 1px solid red;

  margin-top: ${layout.scale[7]};
  padding-top: ${layout.scale[7]};
`

const DetailsTitle = styled(Label)`
  margin-bottom: ${layout.scale[2]};
`

const DetailsItem = styled.div`
  width: 33.333%;
`

export default CardDetails
