import React from "react"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import { mq } from "@style/media-queries"

interface Props {
  tableHeader?: boolean
  block: any
  hash: any
  fromTo: any
  value: any
}

const ColumnsTemplate: React.FunctionComponent<Props> = ({
  tableHeader = false,
  block,
  hash,
  fromTo,
  value,
}) => {
  const colTagType = tableHeader ? "th" : "td"

  return (
    <>
      <Block as={colTagType}>{block}</Block>
      <Hash as={colTagType}>{hash}</Hash>
      <FromTo as={colTagType}>{fromTo}</FromTo>
      <Value as={colTagType}>{value}</Value>
    </>
  )
}

const Col = styled.td`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    padding-right: ${layout.scale[7]};
  }
`

const Block = styled(Col)`
  width: 50%;

  ${mq.greaterThan("topLap")`
    width: 20%;
  `}

  ${mq.greaterThan("topDesk")`
    width: 18%;
  `}
`

const Hash = styled(Col)`
  ${mq.lessThan("bottomDesk")`
    display: none;
  `}

  width: 27%;
`

const FromTo = styled(Col)`
  width: 60%;

  ${mq.lessThan("bottomLap")`
    display: none;
  `}

  ${mq.greaterThan("topDesk")`
    width: 40%;
  `}
`

const Value = styled(Col)`
  width: 50%;

  ${mq.greaterThan("topLap")`
    width: 20%;
  `}

  ${mq.greaterThan("topDesk")`
    width: 15%;
  `}
`

export default ColumnsTemplate
