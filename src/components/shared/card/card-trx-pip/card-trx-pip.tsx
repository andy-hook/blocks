import React, { memo } from "react"
import { Web3TransactionData } from "model"
import styled from "styled-components"
import { layout, appearance } from "@style/design-tokens"
import { mq } from "@style/media-queries"

interface Props {
  value?: number
  to?: Web3TransactionData["to"]
  from?: Web3TransactionData["from"]
  loading?: boolean
}

const CardTrxPip: React.FunctionComponent<Props> = memo(
  ({ value, loading }) => {
    return (
      <PipOuter>
        <PipInner hasValue={value ? value > 0 : false} isLoading={loading} />
      </PipOuter>
    )
  }
)

const PipOuter = styled.div`
  padding: ${layout.scale[1]};
`

const PipInner = styled.div<{
  isLoading: Props["loading"]
  hasValue?: boolean
}>`
  width: ${layout.scale[3]};
  height: ${layout.scale[3]};

  background-color: brown;

  border-radius: ${appearance.radius.circle};

  ${mq.greaterThan("topWide")`
    width: ${layout.scale[4]};
    height: ${layout.scale[4]};
  `}

  ${props => props.hasValue && `background-color: hotpink;`}
  ${props => props.isLoading && `background-color: purple;`};
`

export default CardTrxPip
