import React, { memo } from "react"
import styled from "styled-components"
import TransferPip from "./transfer-pip/transfer-pip"
import { layout, type } from "@style/design-tokens"
import Icon from "@components/shared/icon/icon"
import { themeText } from "@style/theme"

interface Props {
  from?: string
  to?: string
}

const Transfer: React.FunctionComponent<Props> = ({ from, to }) => {
  return (
    <TransferContainer>
      <TransferValue>{from}</TransferValue>
      <TransferIcon>
        <Icon name="arrow-right" />
      </TransferIcon>
      <TransferValue>{to}</TransferValue>
    </TransferContainer>
  )
}

const TransferContainer = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
`

const TransferValue = styled(TransferPip)`
  width: ${layout.scale[14]};
`

const TransferIcon = styled.div`
  /* font-size is used to scale icons for responsive flexibility */
  font-size: ${type.scale[6]};
  color: ${themeText(900)};

  padding-left: ${layout.scale[2]};
  padding-right: ${layout.scale[2]};
`

export default memo(Transfer)
