import React, { memo, ReactNode } from "react"
import * as S from "./gutter.style"

interface Props {
  children: ReactNode
}

const Gutter = memo(
  React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => (
    <S.GutterContainer ref={ref}>{children}</S.GutterContainer>
  ))
)

export default Gutter
