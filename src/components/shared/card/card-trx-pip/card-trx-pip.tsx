import React, { memo } from "react"
import { Web3TransactionData } from "model"
import styled, { css } from "styled-components"
import { layout, appearance } from "@style/design-tokens"
import { mq } from "@style/media-queries"
import { themeForeground, themeBrand } from "@style/theme"

interface Props {
  value?: number
  to?: Web3TransactionData["to"]
  from?: Web3TransactionData["from"]
  loading?: boolean
  isEmpty?: boolean
}

const CardTrxPip: React.FunctionComponent<Props> = memo(
  ({ value, loading, isEmpty }) => {
    return (
      <PipOuter>
        <PipInner
          hasValue={value ? value > 0 : false}
          zeroValue={value === 0}
          isEmpty={isEmpty}
          isLoading={loading}
        />
      </PipOuter>
    )
  }
)

const empty = css`
  border: ${appearance.borderThickness.thick} solid
    ${themeForeground("extraLow")};
`

const zeroValue = css`
  background-color: ${themeBrand()};
  opacity: 0.15;
`

const hasValue = css`
  background-color: ${themeBrand()};
`

const isLoading = css`
  background-color: ${themeForeground("extraLow")};
`

const PipOuter = styled.div`
  padding: ${layout.scale[1]};
`

const PipInner = styled.div<{
  isLoading: Props["loading"]
  isEmpty?: boolean
  hasValue?: boolean
  zeroValue?: boolean
}>`
  width: ${layout.scale[3]};
  height: ${layout.scale[3]};

  border-radius: ${appearance.radius.circle};

  ${mq.greaterThan("topWide")`
    width: ${layout.scale[4]};
    height: ${layout.scale[4]};
  `}

  ${props => props.isEmpty && empty}
  ${props => props.zeroValue && zeroValue}
  ${props => props.hasValue && hasValue}
  ${props => props.isLoading && isLoading};
`

export default CardTrxPip
