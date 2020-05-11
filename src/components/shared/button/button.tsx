import React from "react"
import styled, { css } from "styled-components"
import { type, appearance, layout } from "@style/design-tokens"
import {
  setDisplayCropAndLineHeight,
  typeDisplayButton,
} from "@style/typography"
import { themeForeground, isTheme } from "@style/theme"
import { Link } from "gatsby"
import { mq } from "@style/media-queries"
import classNames from "classnames"
import Icon, { Icons } from "@components/shared/icon/icon"

type ButtonType = "primary" | "secondary" | "tertiary"

interface Props {
  to: string
  children: string
  buttonType?: ButtonType
  className?: string
  icon?: Icons
  disabled?: boolean
}

const Button: React.FunctionComponent<Props> = ({
  to,
  children,
  className,
  disabled = false,
  buttonType = "primary" as ButtonType,
  icon,
}) => {
  return (
    <StyledButton
      to={to}
      type={buttonType}
      className={classNames("", className)}
      disabled={disabled}
    >
      <Inner>
        {icon && <ButtonIcon name={icon} />}
        <Text hasIcon={icon && true}>{children}</Text>
      </Inner>
    </StyledButton>
  )
}

const StyledButton = styled(Link)<{ type: ButtonType; disabled: boolean }>`
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${themeForeground("extraHigh")};

  overflow: hidden;
  font-size: ${type.scale[2]};

  ${mq.greaterThan("topWide")`
    font-size: ${type.scale[3]};
  `}

  text-decoration: none;

  ${props =>
    props.disabled &&
    `
    pointer-events: none;
    opacity: 0.2;
  `}

  ${props => props.type === "primary" && primaryStyles}
  ${props => props.type === "secondary" && secondaryStyles}
  ${props => props.type === "tertiary" && tertiaryStyles}
`

const Inner = styled.div`
  position: relative;
`

const Text = styled.span<{ hasIcon?: boolean }>`
  ${setDisplayCropAndLineHeight(type.lineHeight.flat)}
  ${typeDisplayButton}

  display: block;
  position: relative;
  z-index: ${layout.zIndex.medium};

  ${props => props.hasIcon && `padding-left: 1.75em;`}
`

const ButtonIcon = styled(Icon)`
  position: absolute;
  font-size: 1.25em;
  left: 0;
  top: -0.2em;

  opacity: 0.5;
`

const primaryStyles = css`
  background: linear-gradient(160deg, #c700b1 0%, #6609e1 100%);
  border-radius: ${appearance.radius.pill};

  padding: ${layout.scale[4]} ${layout.scale[6]};

  text-shadow: ${appearance.textShadow.subtle};
`

const secondaryStyles = css`
  padding: ${layout.scale[4]} ${layout.scale[6]};

  ${mq.greaterThan("topWide")`
    font-size: ${type.scale[3]};
    padding: ${layout.scale[5]} ${layout.scale[7]};
  `}

  ${isTheme("dark", `text-shadow: ${appearance.textShadow.subtle}`)};

  border-radius: ${appearance.radius.pill};
  border: ${appearance.borderThickness.regular} solid ${themeForeground("low")};
`

const tertiaryStyles = css`
  color: ${themeForeground("high")};

  ${isTheme("dark", `text-shadow: ${appearance.textShadow.subtle}`)};

  padding-top: ${layout.scale[3]};
  padding-bottom: ${layout.scale[3]};
`

export default Button
