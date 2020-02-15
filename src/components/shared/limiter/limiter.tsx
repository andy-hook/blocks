import React, { PropsWithChildren, memo, ReactNode } from "react"
import { rem } from "polished"
import styled, { css } from "styled-components"

interface Props {
  size?: "small" | "medium" | "large"
  children?: ReactNode
}

const Limiter: React.FunctionComponent<Props> = memo(
  React.forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
    ({ size = "medium", children }, ref) => {
      function renderLimiter() {
        switch (size) {
          case "small":
            return <SmallLimiter ref={ref}>{children}</SmallLimiter>
          case "medium":
            return <MediumLimiter ref={ref}>{children}</MediumLimiter>
          case "large":
            return <LargeLimiter ref={ref}>{children}</LargeLimiter>
        }
      }

      return <>{renderLimiter()}</>
    }
  )
)

const smallSize = rem("900px")
const mediumSize = rem("1200px")
const largeSize = rem("1650px")

const commonStyles = css`
  margin: auto;
`

const SmallLimiter = styled.div`
  ${commonStyles}

  max-width: ${smallSize};
`

const MediumLimiter = styled.div`
  ${commonStyles}

  max-width: ${mediumSize};
`

const LargeLimiter = styled.div`
  ${commonStyles}

  max-width: ${largeSize};
`

export default Limiter
