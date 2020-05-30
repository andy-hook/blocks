import React from "react"
import { rem } from "polished"
import styled, { css } from "styled-components"

interface Props {
  size?: "small" | "medium" | "large"
}
const Limiter: React.FunctionComponent<Props> = ({
  size = "medium",
  children,
}) => {
  switch (size) {
    case "small":
      return <SmallLimiter>{children}</SmallLimiter>
    case "medium":
      return <MediumLimiter>{children}</MediumLimiter>
    case "large":
      return <LargeLimiter>{children}</LargeLimiter>
  }
}

const commonStyles = css`
  margin: auto;
`

const SmallLimiter = styled.div`
  ${commonStyles}

  max-width: ${rem("900px")};
`

const MediumLimiter = styled.div`
  ${commonStyles}

  max-width: ${rem("1200px")};
`

const LargeLimiter = styled.div`
  ${commonStyles}

  max-width: ${rem("1650px")};
`

export default Limiter
