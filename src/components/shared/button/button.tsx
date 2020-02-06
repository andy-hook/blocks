import React, { memo } from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { type, appearance, animation, layout } from "@style/design-tokens"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import {
  setDisplayCropAndLineHeight,
  typeDisplayButton,
} from "@style/typography"
import { themeText } from "@style/theme"

interface Props {
  href: string
  children: string
}

const Button: React.FunctionComponent<Props> = memo(({ href, children }) => {
  return (
    <StyledButton href={href} target="_blank">
      <StyledButtonInner>{children}</StyledButtonInner>
    </StyledButton>
  )
})

const StyledButton = styled(OutboundLink)`
  position: relative;

  overflow: hidden;

  font-size: ${type.scale[2]};

  border-radius: ${appearance.radius.pill};

  text-decoration: none;

  padding: 1.18em 2.15em;
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

  &:focus {
    outline: none;
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

  ${scaleBetween(
    "font-size",
    type.scale[2],
    type.scale[5],
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[5], "topUltra")}
`

const StyledButtonInner = styled.span`
  ${setDisplayCropAndLineHeight(type.lineHeight.flat)}
  ${typeDisplayButton}

  color: ${themeText(100)};

  display: block;
  position: relative;
  z-index: ${layout.zIndex.medium};

  text-shadow: ${appearance.textShadow.subtle};
`

export default Button
