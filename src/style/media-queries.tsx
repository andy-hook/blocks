import { generateMedia } from "styled-media-query"
import { stripUnit, between } from "polished"
import { breakpoints, baseFontSize, emBreakpoints } from "@style/variables"
import { css, CSSProp } from "styled-components"
import { BreakpointName } from "@custom-types/breakpoints"

export const mq = generateMedia(emBreakpoints)

export const uniformScale = (
  cssValue: string,
  targetMediaQuery: BreakpointName
): string => {
  // Split into value and unit
  const value = stripUnit(cssValue)
  const unit = stripUnit(cssValue, true)[1]
  const breakpoint = breakpoints[targetMediaQuery]

  // Convert from relative to px value
  const convertedUnit = unit === "px" ? value : value * baseFontSize

  const bpValue = stripUnit(breakpoint)

  return `${convertedUnit / (bpValue * 0.01 * 1)}vw`
}

export const scaleBetween = (
  property: string,
  fromValue: string | CSSProp,
  toValue: string | CSSProp,
  fromBreakpoint: BreakpointName,
  toBreakpoint: BreakpointName
) =>
  css`
    ${mq.between(fromBreakpoint, toBreakpoint)`
      ${property}: ${between(
      `${fromValue}`,
      `${toValue}`,
      emBreakpoints[fromBreakpoint],
      emBreakpoints[toBreakpoint]
    )};
    `}
  `

export const scaleGreaterThan = (
  property: string,
  fromValue: string | CSSProp,
  fromBreakpoint: BreakpointName
) =>
  css`
    ${mq.greaterThan(fromBreakpoint)`
      ${property}: ${uniformScale(`${fromValue}`, fromBreakpoint)};
    `}
  `
