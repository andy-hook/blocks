import { generateMedia, pxToEm } from "styled-media-query"
import { stripUnit, between } from "polished"
import { css, CSSProp } from "styled-components"
import { type } from "./design-tokens"

export type BreakpointName =
  | "bottomThumb"
  | "topThumb"
  | "bottomPalm"
  | "topPalm"
  | "bottomLap"
  | "topLap"
  | "bottomDesk"
  | "topDesk"
  | "bottomWide"
  | "topWide"
  | "bottomWall"
  | "topWall"
  | "bottomUltra"
  | "topUltra"

export type Breakpoints = { [key in BreakpointName]: string }

/* Breakpoints
  ------------------------------------------------- */

const breakpoints: Breakpoints = {
  bottomThumb: "479px",
  topThumb: "480px",

  bottomPalm: "599px",
  topPalm: "600px",

  bottomLap: "899px",
  topLap: "900px",

  bottomDesk: "1199px",
  topDesk: "1200px",

  bottomWide: "1499px",
  topWide: "1500px",

  bottomWall: "1799px",
  topWall: "1800px",

  bottomUltra: "2200px",
  topUltra: "2200px",
}

const emBreakpoints = pxToEm(breakpoints, type.baseFontSize)

export const constructMaxMediaString = (breakpoint: string): string => {
  return `(max-width: ${breakpoint})`
}

export const constructMinMediaString = (breakpoint: string): string => {
  return `(min-width: ${breakpoint})`
}

export const matchMediaStrings: Breakpoints = {
  bottomThumb: constructMaxMediaString(breakpoints.bottomThumb),
  topThumb: constructMinMediaString(breakpoints.bottomThumb),

  bottomPalm: constructMaxMediaString(breakpoints.bottomPalm),
  topPalm: constructMinMediaString(breakpoints.topPalm),

  bottomLap: constructMaxMediaString(breakpoints.bottomLap),
  topLap: constructMinMediaString(breakpoints.topLap),

  bottomDesk: constructMaxMediaString(breakpoints.bottomDesk),
  topDesk: constructMinMediaString(breakpoints.topDesk),

  bottomWide: constructMaxMediaString(breakpoints.bottomWide),
  topWide: constructMinMediaString(breakpoints.topWide),

  bottomWall: constructMaxMediaString(breakpoints.bottomWall),
  topWall: constructMinMediaString(breakpoints.topWall),

  bottomUltra: constructMaxMediaString(breakpoints.bottomUltra),
  topUltra: constructMinMediaString(breakpoints.topUltra),
}

export const mq = generateMedia(emBreakpoints)

export const uniformScale = (
  cssValue: string,
  targetMediaQuery: BreakpointName
): string => {
  // Split into value and unit
  const value = stripUnit(cssValue) as number
  const valueWithUnit = stripUnit(cssValue, true) as string[]
  const unit = valueWithUnit[1]
  const breakpoint = breakpoints[targetMediaQuery]

  // Convert from relative to px value
  const convertedUnit = unit === "px" ? value : value * type.baseFontSize

  const bpValue = stripUnit(breakpoint) as number

  return `${convertedUnit / (bpValue * 0.01 * 1)}vw`
}

export const scaleBetween = (
  property: string,
  fromValue: string,
  toValue: string,
  fromBreakpoint: BreakpointName,
  toBreakpoint: BreakpointName
): CSSProp =>
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
  fromValue: string,
  fromBreakpoint: BreakpointName
): CSSProp =>
  css`
    ${mq.greaterThan(fromBreakpoint)`
      ${property}: ${uniformScale(`${fromValue}`, fromBreakpoint)};
    `}
  `
