import React from "react"
import styled, { css } from "styled-components"
import { type, appearance, animation, layout } from "@style/design-tokens"
import {
  setDisplayCropAndLineHeight,
  typeDisplayButton,
} from "@style/typography"
import { themeText } from "@style/theme"
import { Link } from "gatsby"
import { mq } from "@style/media-queries"
import classNames from "classnames"

type ButtonType = "primary" | "secondary"

interface Props {
  to: string
  children: string
  buttonType?: ButtonType
  className?: string
}

const Button: React.FunctionComponent<Props> = ({
  to,
  children,
  className,
  buttonType = "primary",
}) => {
  return (
    <StyledButton
      to={to}
      type={buttonType}
      className={classNames("", className)}
    >
      <Inner>{children}</Inner>
    </StyledButton>
  )
}

const StyledButton = styled(Link)<{ type: ButtonType }>`
  position: relative;

  display: inline-block;

  overflow: hidden;
  font-size: ${type.scale[2]};
  border-radius: ${appearance.radius.pill};

  text-decoration: none;
  text-align: center;

  padding: ${layout.scale[4]} ${layout.scale[6]};

  ${mq.greaterThan("topWide")`
    font-size: ${type.scale[3]};
    padding: ${layout.scale[5]} ${layout.scale[7]};
  `}

  ${props => props.type === "primary" && primaryStyles}
  ${props => props.type === "secondary" && secondaryStyles}
`

const Inner = styled.span`
  ${setDisplayCropAndLineHeight(type.lineHeight.flat)}
  ${typeDisplayButton}

  color: ${themeText(100)};

  display: block;
  position: relative;
  z-index: ${layout.zIndex.medium};

  text-shadow: ${appearance.textShadow.subtle};
`

const primaryStyles = css`
  background: linear-gradient(160deg, #c700b1 0%, #6609e1 100%);

  &::before,
  &::after {
    transition: opacity ${animation.duration.fast} linear;
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
  border: ${appearance.borderThickness.regular} solid ${themeText(800)};
`

export default Button
