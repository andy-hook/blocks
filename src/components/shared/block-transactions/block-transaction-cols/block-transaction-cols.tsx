import React from "react"
import styled from "styled-components"
import classNames from "classnames"

interface Props {
  tableHeader?: boolean
  one: any
  two: any
  three: any
  four: any
}

const BlockTransactionCols: React.FunctionComponent<Props> = ({
  tableHeader = false,
  one,
  two,
  three,
  four,
}) => {
  const colTagType = tableHeader ? "th" : "td"

  return (
    <>
      <ColOne as={colTagType}>{one}</ColOne>
      <ColTwo as={colTagType}>{two}</ColTwo>
      <ColThree as={colTagType}>{three}</ColThree>
      <ColFour as={colTagType}>{four}</ColFour>
    </>
  )
}

const Col = styled.td``

const ColOne = styled(Col)``

const ColTwo = styled(Col)``

const ColThree = styled(Col)``

const ColFour = styled(Col)``

export default BlockTransactionCols
