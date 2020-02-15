import React from "react"
import styled from "styled-components"
import { layout } from "@style/design-tokens"

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

  padding-left: ${layout.scale[5]};
  padding-right: ${layout.scale[5]};
`

const Block = styled(Col)`
  width: 18%;
`

const Hash = styled(Col)`
  width: 27%;
`

const FromTo = styled(Col)`
  width: 40%;
`

const Value = styled(Col)`
  width: 15%;
`

export default ColumnsTemplate
