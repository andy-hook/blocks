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
  disabled?: boolean
}

const BlockHeaderSwitch: React.FunctionComponent<Props> = memo(
  ({
    onDetailsClick,
    onTransactionsClick,
    trxVisible,
    className,
    disabled = false,
  }) => {
    return (
      <SwitchContainer className={classNames("", className)}>
        <SwitchButton
          onClick={onDetailsClick}
          active={!trxVisible}
          disabled={disabled}
        >
          <SwitchButtonText>Details</SwitchButtonText>
        </SwitchButton>
        <SwitchButton
          onClick={onTransactionsClick}
          active={trxVisible}
          disabled={disabled}
        >
          <SwitchButtonText>Transactions</SwitchButtonText>
        </SwitchButton>
      </SwitchContainer>
    )
  }
)

const activeStyle = css`
  background-color: ${themeBrand()};
  color: white;
`

const SwitchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

  &[disabled] {
    opacity: 0.25;
  }
`

const SwitchButtonText = styled.div`
  ${setDisplayCropAndLineHeight(type.lineHeight.flat)}
  ${typeDisplayButton}
`

export default BlockHeaderSwitch
