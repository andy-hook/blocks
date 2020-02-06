import { rem } from "polished"
import { createCubicBezier } from "@style/utils"
import { EaseName, Eases } from "ease"

/* Typography
  ------------------------------------------------- */

export const baseFontSize = 16

const fontFamily = {
  base: `'inter', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
  display: `'maison-neue', -apple-system,BlinkMacSystemFont, "Segoe UI", Roboto,Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif`,
}

const letterSpacing = {
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

const lineHeight = {
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

const fontWeight = {
  base: {
    regular: "400",
    medium: "500",
    semibold: "600",
  },
  display: {
    bold: "700",
  },
}

const typeScale = {
  1: rem("12px"),
  2: rem("14px"),
  3: rem("16px"),
  4: rem("16px"),
  5: rem("18px"),
  6: rem("20px"),
  7: rem("24px"),
  8: rem("30px"),
  9: rem("36px"),
  10: rem("48px"),
  11: rem("64px"),
}

const spacingScale = {
  px: "1px",
  1: rem("4px"),
  2: rem("8px"),
  3: rem("12px"),
  4: rem("16px"),
  5: rem("20px"),
  6: rem("24px"),
  7: rem("32px"),
  8: rem("40px"),
  9: rem("48px"),
  10: rem("64px"),
  11: rem("80px"),
  12: rem("96px"),
  13: rem("128px"),
  14: rem("160px"),
  15: rem("224px"),
  16: rem("256px"),
}

/* Border radius
  ------------------------------------------------- */

const borderRadius = {
  base: "4px",
  large: "10px",
  pill: "50000px",
  circle: "50%",
}

/* Text shadow
  ------------------------------------------------- */

const textShadow = {
  subtle: "0 0 0.03em rgba(0, 0, 0, 0.5)",
  heavy: "0 0 1em rgba(0, 0, 0.6)",
}

/* Border thickness
  ------------------------------------------------- */

const borderThickness = {
  regular: "1px",
  thick: "2px",
}

/* Duration
  ------------------------------------------------- */

const durationUnit = 100

const duration = {
  fast: `${durationUnit}ms`,
  base: `${durationUnit * 2}ms`,
  slow: `${durationUnit * 3}ms`,
}

/* Index
  ------------------------------------------------- */

const zIndex = {
  floor: 0,
  low: 100,
  medium: 200,
  high: 300,
  highest: 400,
}

/* Ease values
------------------------------------------------- */

const easeValues: Eases = {
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

  // Subtle bounce
  subtleBounce: [0.15, 0.585, 0.225, 1.26],
}

const ease = (easeName: EaseName) => createCubicBezier(easeValues[easeName])

/* Public
------------------------------------------------- */

export const type = {
  baseFontSize,
  fontFamily,
  letterSpacing,
  lineHeight,
  fontWeight,
  scale: {
    ...typeScale,
  },
}

export const layout = {
  zIndex,
  scale: {
    ...spacingScale,
  },
}

export const appearance = {
  radius: {
    ...borderRadius,
  },
  textShadow,
  borderThickness,
}

export const animation = {
  duration,
  ease,
}
