import React from "react"
import styled, { css } from "styled-components"
import Label from "@components/label/label"
import { layout } from "@style/design-tokens"
import TruncateString from "react-truncate-string"
import { mq } from "@style/media-queries"

interface Props {
  size?: string
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
      {/* Size */}
      <SizeItem>
        <DetailsTitle intensity="low">Size</DetailsTitle>
        <DetailsValue intensity="high" loading={loading} skeletonWidth="sm">
          <TruncateString text={`${size ? size : ""}B`} truncateAt={20} />
        </DetailsValue>
      </SizeItem>

      {/* Difficulty */}
      <DifficultyItem>
        <DetailsTitle intensity="low">Difficulty</DetailsTitle>
        <DetailsValue intensity="high" loading={loading} skeletonWidth="lg">
          <TruncateString text={difficulty} truncateAt={20} />
        </DetailsValue>
      </DifficultyItem>

      {/* Miner */}
      <MinerItem>
        <DetailsTitle intensity="low">Miner</DetailsTitle>
        <DetailsValue intensity="high" loading={loading} skeletonWidth="lg">
          <TruncateString text={miner} truncateAt={40} />
        </DetailsValue>
      </MinerItem>
    </Details>
  )
}

const Details = styled.div`
  display: flex;

  ${mq.lessThan("bottomDesk")`
    flex-direction: column;
  `}

  ${mq.greaterThan("topDesk")`
    margin-left: -${layout.scale[3]};
    margin-right: -${layout.scale[3]};
  `}
`

const DetailsTitle = styled(Label)`
  ${mq.greaterThan("topDesk")`
    margin-bottom: ${layout.scale[2]};
  `}
`

const DetailsValue = styled(Label)`
  ${mq.lessThan("bottomDesk")`
    width: 60%;
    text-align: right;
  `}
`

const DetailsItem = css`
  ${mq.lessThan("bottomDesk")`
    display: flex;

    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${layout.scale[3]};
    }
  `}

  ${mq.greaterThan("topDesk")`
    padding-left: ${layout.scale[3]};
    padding-right: ${layout.scale[3]};
  `}
`

const SizeItem = styled.div`
  ${DetailsItem}

  ${mq.between("topDesk", "bottomWide")`
    width: 20%;
  `}

  ${mq.greaterThan("topWide")`
    width: 18%;
  `}
`

const DifficultyItem = styled.div`
  ${DetailsItem}

  ${mq.between("topDesk", "bottomWide")`
    width: 30%;
  `}

  ${mq.greaterThan("topWide")`
    width: 32%;
  `}
`

const MinerItem = styled.div`
  ${DetailsItem}

  ${mq.between("topDesk", "bottomWide")`
    width: 50%;
  `}

  ${mq.greaterThan("topWide")`
    width: 40%;
  `}
`

export default CardDetails
