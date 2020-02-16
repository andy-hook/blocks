import { withPrefix } from "gatsby"
import React, { memo } from "react"
import styled from "styled-components"
import classNames from "classnames"

export type Icons =
  | "dribbble"
  | "instagram"
  | "linkedin"
  | "twitter"
  | "github"
  | "mail"
  | "arrow-right"
  | "arrow-left"
  | "shuffle"
  | "dark-mode"
  | "light-mode"
  | "blocks"

interface Props {
  name: Icons
  className?: string
}

const Icon: React.FunctionComponent<Props> = memo(({ name, className }) => (
  <IconWrapper className={classNames("", className)}>
    <IconSvg>
      <use xlinkHref={withPrefix(`icon-sprite.svg#${name}`)} />
    </IconSvg>
  </IconWrapper>
))

export const IconWrapper = styled.div`
  width: 1em;
  height: 1em;
`

export const IconSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
`

export default Icon
