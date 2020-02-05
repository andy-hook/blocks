import { withPrefix } from "gatsby"
import React, { memo } from "react"
import { Icons } from "@custom-types/icons"
import styled from "styled-components"

interface Props {
  name: Icons
}

const Icon: React.FunctionComponent<Props> = memo(({ name }) => (
  <IconWrapper>
    <IconSvg className="icon">
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
