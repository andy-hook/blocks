import { withPrefix } from "gatsby"
import React, { memo } from "react"
import { Icons } from "@custom-types/icons"
import * as S from "./icon.style"

interface Props {
  name: Icons
}

const Icon: React.FunctionComponent<Props> = memo(({ name }) => (
  <S.IconWrapper>
    <S.IconSvg className="icon">
      <use xlinkHref={withPrefix(`icon-sprite.svg#${name}`)} />
    </S.IconSvg>
  </S.IconWrapper>
))

export default Icon
