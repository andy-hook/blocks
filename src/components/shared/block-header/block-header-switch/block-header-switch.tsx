import React, { memo } from "react"
import styled, { css } from "styled-components"
import { type, layout, appearance } from "@style/design-tokens"
import {
  setDisplayCropAndLineHeight,
  typeDisplayButton,
} from "@style/typography"
import { themeForeground, themeBrand, isTheme } from "@style/theme"
import classNames from "classnames"

interface Props {
  onDetailsClick?: () => void
  onTransactionsClick?: () => void
  trxVisible: boolean
  className?: string
  visible?: boolean
}

const BlockHeaderSwitch: React.FunctionComponent<Props> = memo(
  ({ onDetailsClick, onTransactionsClick, trxVisible, className }) => {
    return (
      <Container className={classNames("", className)}>
        <SwitchButton onClick={onDetailsClick} active={!trxVisible}>
          <SwitchButtonText>Details</SwitchButtonText>
        </SwitchButton>
        <SwitchButton onClick={onTransactionsClick} active={trxVisible}>
          <SwitchButtonText>Transactions</SwitchButtonText>
        </SwitchButton>
      </Container>
    )
  }
)

const Container = styled.div``

const activeStyle = css`
  background-color: ${themeBrand()};
`

const SwitchButton = styled.button<{ active: boolean }>`
  color: ${themeForeground("extraHigh")};
  padding: ${layout.scale[3]} ${layout.scale[6]};
  border-radius: ${appearance.radius.pill};
  background-color: ${themeForeground("extraLow")};

  ${isTheme("dark", `text-shadow: ${appearance.textShadow.subtle};`)};

  &:last-child {
    margin-left: ${layout.scale[3]};
  }

  ${props => props.active && activeStyle}
`

const SwitchButtonText = styled.div`
  ${setDisplayCropAndLineHeight(type.lineHeight.flat)}
  ${typeDisplayButton}
`

export default BlockHeaderSwitch
