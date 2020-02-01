import React, { memo } from "react"
import * as S from "./button.style"

interface Props {
  href: string
  children: string
}

const Button: React.FunctionComponent<Props> = memo(({ href, children }) => {
  return (
    <S.StyledButton href={href} target="_blank">
      <S.StyledButtonInner>{children}</S.StyledButtonInner>
    </S.StyledButton>
  )
})

export default Button
