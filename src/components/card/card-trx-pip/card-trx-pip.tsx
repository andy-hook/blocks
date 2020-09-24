import React from "react"
import styled, { css } from "styled-components"
import { layout, appearance } from "@style/design-tokens"
import { mq } from "@style/media-queries"
import { themeForeground, themeBrand } from "@style/theme"

interface Props {
  value?: number
  to?: string
  from?: string
  loading?: boolean
  isEmpty?: boolean
}

const CardTrxPip: React.FunctionComponent<Props> = ({
  value,
  loading,
  isEmpty,
}) => {
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

const empty = css`
  border: ${appearance.borderThickness.thick} solid
    ${themeForeground("extraLow")};
`

const gradient = css`
  background: linear-gradient(
    135deg,
    ${themeBrand("light")} 0%,
    ${themeBrand()} 90%
  );
`

const zeroValue = css`
  ${gradient}

  opacity: 0.15;
`

const hasValue = css`
  ${gradient}
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
