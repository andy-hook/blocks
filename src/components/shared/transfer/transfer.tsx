import React from "react"
import styled from "styled-components"
import TransferPip from "./transfer-pip/transfer-pip"
import { layout } from "@style/design-tokens"

interface Props {
  from?: string
  to?: string
}

const Transfer: React.FunctionComponent<Props> = ({ from, to }) => {
  return (
    <TransferContainer>
      <TransferValue>{from}</TransferValue>
      <TransferValue>{to}</TransferValue>
    </TransferContainer>
  )
}

const TransferContainer = styled.div`
  width: 100%;
  display: flex;
`

const TransferValue = styled(TransferPip)`
  width: ${layout.scale[14]};
`

export default Transfer
