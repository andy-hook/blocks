import React from "react"
import { Web3TransactionData } from "model"
import styled from "styled-components"

interface Props {
  value?: number
  to?: Web3TransactionData["to"]
  from?: Web3TransactionData["from"]
  loading?: boolean
}

const TransactionPip: React.FunctionComponent<Props> = ({ value, loading }) => {
  return <Pip hasValue={value ? value > 0 : false} isLoading={loading} />
}

export const Pip = styled.div<{
  isLoading: Props["loading"]
  hasValue?: boolean
}>`
  width: 1em;
  height: 1em;

  background-color: brown;

  ${props => props.hasValue && `background-color: hotpink;`}
  ${props => props.isLoading && `background-color: purple;`}
`

export default TransactionPip
