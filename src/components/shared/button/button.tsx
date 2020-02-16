import React, { memo } from "react"
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
}

const Button: React.FunctionComponent<Props> = memo(
  ({ to, children, className, buttonType = "primary" as ButtonType, icon }) => {
    return (
      <StyledButton
        to={to}
        type={buttonType}
        className={classNames("", className)}
      >
        <Inner>
          {icon && <ButtonIcon name={icon} />}
          <Text hasIcon={icon && true}>{children}</Text>
        </Inner>
      </StyledButton>
    )
  }
)

const StyledButton = styled(Link)<{ type: ButtonType }>`
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

  ${isTheme(
    "dark",
    css`
      text-shadow: ${appearance.textShadow.subtle};
    `
  )};
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

  ${mq.greaterThan("topWide")`
    padding: ${layout.scale[5]} ${layout.scale[7]};
  `}

  &::before,
  &::after {
    content: "";

    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    opacity: 0;

    border-radius: ${appearance.radius.pill};
  }

  &::before {
    box-shadow: inset 0 -0.25em 1em 0 #c615a8;
    z-index: ${layout.zIndex.medium};
  }

  &::after {
    background: linear-gradient(160deg, #c615a8 0%, #4d0fbe 100%);
    z-index: ${layout.zIndex.low};
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 0.1;
    }

    &::after {
      opacity: 0.75;
    }
  }
`

const secondaryStyles = css`
  padding: ${layout.scale[4]} ${layout.scale[6]};

  ${mq.greaterThan("topWide")`
    font-size: ${type.scale[3]};
    padding: ${layout.scale[5]} ${layout.scale[7]};
  `}

  border-radius: ${appearance.radius.pill};
  border: ${appearance.borderThickness.regular} solid ${themeForeground("low")};
`

const tertiaryStyles = css`
  color: ${themeForeground("high")};
`

export default Button
