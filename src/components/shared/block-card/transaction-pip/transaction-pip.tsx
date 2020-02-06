import React from "react"
import { Web3TransactionData } from "model"
import styled from "styled-components"

interface Props {
  value?: Web3TransactionData["value"]
  to?: Web3TransactionData["to"]
  from?: Web3TransactionData["from"]
}

const TransactionPip: React.FunctionComponent<Props> = ({
  value,
  to,
  from,
}) => {
  return (
    <Pip>
      {/* <div>{value}</div>
      <div>{to}</div>
      <div>{from}</div> */}
    </Pip>
  )
}

export const Pip = styled.div`
  width: 1em;
  height: 1em;

  background-color: black;
`

export default TransactionPip
