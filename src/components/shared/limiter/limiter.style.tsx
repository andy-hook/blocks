import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleGreaterThan } from "@style/media-queries"

const smallSize = rem("900px")
const mediumSize = rem("1200px")
const largeSize = rem("1500px")

const commonStyles = css`
  margin: auto;
`

export const SmallLimiter = styled.div`
  ${commonStyles}

  max-width: ${smallSize};

  ${scaleGreaterThan("max-width", smallSize, "topWall")}
`

export const MediumLimiter = styled.div`
  ${commonStyles}

  max-width: ${mediumSize};

  ${scaleGreaterThan("max-width", mediumSize, "topWall")}
`

export const LargeLimiter = styled.div`
  ${commonStyles}

  max-width: ${largeSize};

  ${scaleGreaterThan("max-width", largeSize, "topWall")}
`
