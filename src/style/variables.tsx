import { pxToEm, pxToRem } from "styled-media-query"
import { rem } from "polished"
import { Greys, GreyNames } from "@custom-types/theme"
import { createHsl, createHsla, createCubicBezier } from "@style/utils"
import { Breakpoints } from "@custom-types/breakpoints"
import { EaseName, Eases } from "ease"

/* Typography
  ------------------------------------------------- */

export const baseFontSize = 16

export const fontFamily = {
  base: `'inter', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
  display: `'maison-neue', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
}

export const letterSpacing = {
  base: {
    regular: "0.01em",
    medium: "0.01em",
    semibold: "0.01em",
  },
  display: {
    bold: "-0.02em",
    button: "0.01em",
  },
  uppercase: "0.06em",
}

export const lineHeight = {
  flat: 1,
  base: {
    regular: 1.4,
    tight: 1.2,
    longform: 1.6,
  },
  display: {
    regular: 1.4,
    tight: 1.15,
    longform: 1.6,
  },
}

export const fontWeight = {
  base: {
    regular: "400",
    medium: "500",
    semibold: "600",
  },
  display: {
    bold: "700",
  },
}

export const typeScale = {
  1: rem("12px"),
  2: rem("13px"),
  3: rem("14px"),
  4: rem("15px"),
  5: rem("16px"),
  6: rem("18px"),
  7: rem("20px"),
  8: rem("26px"),
  9: rem("32px"),
  10: rem("44px"),
  11: rem("58px"),
  12: rem("74px"),
}

export const spacingScale = {
  1: rem("4px"),
  2: rem("8px"),
  3: rem("12px"),
  4: rem("16px"),
  5: rem("24px"),
  6: rem("32px"),
  7: rem("48px"),
  8: rem("64px"),
  9: rem("96px"),
  10: rem("128px"),
  11: rem("192px"),
  12: rem("256px"),
  13: rem("384px"),
  14: rem("512px"),
  15: rem("640px"),
  16: rem("768px"),
}

/* Border radius
  ------------------------------------------------- */

export const borderRadius = {
  base: "4px",
  large: "10px",
  pill: "50000px",
  circle: "50%",
}

/* Text shadow
  ------------------------------------------------- */

export const textShadow = {
  subtle: "0 0 0.03em rgba(0, 0, 0, 0.5)",
  heavy: "0 0 1em rgba(0, 0, 0.6)",
}

/* Easing
  ------------------------------------------------- */

export const easingTimings: { [index: string]: number[] } = {
  subtleBounce: [0.15, 0.585, 0.225, 1.26],
}

export function easing(name: string) {
  return `cubic-bezier(${easingTimings[name].toString()})`
}

/* Duration
  ------------------------------------------------- */

const durationUnit = 100

export const duration = {
  fast: `${durationUnit}ms`,
  base: `${durationUnit * 2}ms`,
  slow: `${durationUnit * 3}ms`,
}

/* Border thickness
  ------------------------------------------------- */

export const borderThickness = {
  regular: "1px",
  thick: "2px",
}

/* Breakpoints
  ------------------------------------------------- */

export const breakpoints: Breakpoints = {
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

export const emBreakpoints = pxToEm(breakpoints, baseFontSize)
export const remBreakpoints = pxToRem(breakpoints, baseFontSize)

export const constructMaxMediaString = (breakpoint: string) => {
  return `(max-width: ${breakpoint})`
}

export const constructMinMediaString = (breakpoint: string) => {
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

/* Index
  ------------------------------------------------- */

export const zIndex = {
  floor: 0,
  low: 100,
  medium: 200,
  high: 300,
  highest: 400,
}

/* Light greys
  ------------------------------------------------- */

export const lightGreyHSL: Greys = {
  100: "240, 3%, 100%",
  200: "240, 3%, 97%",
  300: "240, 3%, 95%",
  400: "240, 3%, 93%",
  500: "240, 3%, 90%",
  600: "240, 3%, 86%",
  700: "240, 3%, 83%",
  800: "240, 3%, 60%",
  900: "240, 3%, 40%",
  1000: "240, 3%, 30%",
}

export const lightGrey = (value: GreyNames) => createHsl(lightGreyHSL[value])

export const lightGreyAlpha = (value: GreyNames, alpha: number) =>
  createHsla(lightGreyHSL[value], alpha)

/* Dark greys
------------------------------------------------- */

export const darkGreyHSL: Greys = {
  100: "240, 17%, 2%",
  200: "240, 15%, 5%",
  300: "240, 15%, 11%",
  400: "240, 10%, 14%",
  500: "240, 8%, 18%",
  600: "240, 8%, 21%",
  700: "240, 8%, 26%",
  800: "240, 8%, 30%",
  900: "240, 8%, 40%",
  1000: "240, 8%, 60%",
}

export const darkGrey = (value: GreyNames) => createHsl(darkGreyHSL[value])

export const darkGreyAlpha = (value: GreyNames, alpha: number) =>
  createHsla(darkGreyHSL[value], alpha)

/* Dark theme greys
------------------------------------------------- */

// Tone
export const darkThemeToneHSL: Greys = {
  100: "240, 6%, 7%",
  200: "240, 5%, 8%",
  300: "240, 4%, 10%",
  400: "240, 4%, 11%",
  500: "240, 2%, 12%",
  600: "240, 3%, 13%",
  700: "240, 3%, 14%",
  800: "240, 3%, 15%",
  900: "240, 2%, 16%",
  1000: "240, 2%, 17%",
}

export const darkThemeTone = (value: GreyNames) =>
  createHsl(darkThemeToneHSL[value])

export const darkThemeToneAlpha = (value: GreyNames, alpha: number) =>
  createHsla(darkThemeToneHSL[value], alpha)

// Text
export const darkThemeTextHSL: Greys = {
  100: "240, 3%, 100%",
  200: "240, 3%, 97%",
  300: "240, 3%, 95%",
  400: "240, 3%, 93%",
  500: "240, 3%, 90%",
  600: "240, 3%, 86%",
  700: "240, 3%, 83%",
  800: "240, 3%, 60%",
  900: "240, 3%, 40%",
  1000: "240, 3%, 30%",
}

export const darkThemeText = (value: GreyNames) =>
  createHsl(darkThemeTextHSL[value])

export const darkThemeTextAlpha = (value: GreyNames, alpha: number) =>
  createHsla(darkThemeTextHSL[value], alpha)

/* Light theme greys
------------------------------------------------- */

// Tone
export const lightThemeToneHSL: Greys = {
  100: "240, 3%, 100%",
  200: "240, 3%, 97%",
  300: "240, 3%, 95%",
  400: "240, 3%, 93%",
  500: "240, 3%, 90%",
  600: "240, 3%, 86%",
  700: "240, 3%, 83%",
  800: "240, 3%, 60%",
  900: "240, 3%, 40%",
  1000: "240, 3%, 30%",
}

export const lightThemeTone = (value: GreyNames) =>
  createHsl(lightThemeToneHSL[value])

export const lightThemeToneAlpha = (value: GreyNames, alpha: number) =>
  createHsla(lightThemeToneHSL[value], alpha)

// Text
export const lightThemeTextHSL: Greys = {
  100: "240, 17%, 2%",
  200: "240, 15%, 5%",
  300: "240, 15%, 11%",
  400: "240, 10%, 14%",
  500: "240, 8%, 18%",
  600: "240, 8%, 21%",
  700: "240, 8%, 26%",
  800: "240, 8%, 30%",
  900: "240, 8%, 40%",
  1000: "240, 8%, 60%",
}

export const lightThemeText = (value: GreyNames) =>
  createHsl(darkThemeTextHSL[value])

export const lightThemeTextAlpha = (value: GreyNames, alpha: number) =>
  createHsla(darkThemeTextHSL[value], alpha)

export const easeValues: Eases = {
  // Cubic
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeOutCubic: [0.215, 0.61, 0.355, 1.0],
  easeInOutCubic: [0.645, 0.045, 0.355, 1.0],

  // Circ
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutCirc: [0.075, 0.82, 0.165, 1.0],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],

  // Expo
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeOutExpo: [0.19, 1.0, 0.22, 1.0],
  easeInOutExpo: [1.0, 0.0, 0.0, 1.0],

  // Quad
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],

  // Quart
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeOutQuart: [0.165, 0.84, 0.44, 1.0],
  easeInOutQuart: [0.77, 0.0, 0.175, 1.0],

  // Quint
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeOutQuint: [0.23, 1.0, 0.32, 1.0],
  easeInOutQuint: [0.86, 0.0, 0.07, 1.0],

  // Sine
  easeInSine: [0.47, 0.0, 0.745, 0.715],
  easeOutSine: [0.39, 0.575, 0.565, 1.0],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],

  // Back
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
}

export const ease = (easeName: EaseName) =>
  createCubicBezier(easeValues[easeName])
