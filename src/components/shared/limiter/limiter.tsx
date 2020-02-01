import React, { memo, PropsWithChildren } from "react"
import * as S from "./limiter.style"

interface Props {
  size?: "small" | "medium" | "large"
}

const Limiter: React.FunctionComponent<PropsWithChildren<Props>> = memo(
  React.forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
    ({ size = "medium", children }, ref) => {
      const renderLimiter = () => {
        switch (size) {
          case "small":
            return <S.SmallLimiter ref={ref}>{children}</S.SmallLimiter>
          case "medium":
            return <S.MediumLimiter ref={ref}>{children}</S.MediumLimiter>
          case "large":
            return <S.LargeLimiter ref={ref}>{children}</S.LargeLimiter>
        }
      }

      return <>{renderLimiter()}</>
    }
  )
)

export default Limiter
