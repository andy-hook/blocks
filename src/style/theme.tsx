import { css, CSSProp } from "styled-components"
import { createHsl, createHsla } from "@style/utils"

type GreyNames = "extraLow" | "low" | "medium" | "high" | "extraHigh"

type Greys = { [key in GreyNames]: string }

export type ThemeName = "light" | "dark"

type LayerNames = "low" | "medium" | "high"

type Layers = { [key in LayerNames]: string }

export interface Theme {
  name: ThemeName
  text: Greys
  layerTone: Layers
}

/* Dark theme app layers
------------------------------------------------- */
const darkThemeLayers: Layers = {
  low: "206, 13%, 11%",
  medium: "207, 13%, 14%",
  high: "204, 13%, 15%",
}

export const darkThemeLayer = (value: LayerNames) =>
  createHsl(darkThemeLayers[value])

export const darkThemeLayerAlpha = (value: LayerNames, alpha: number) =>
  createHsla(darkThemeLayers[value], alpha)

/* Light theme app layers
------------------------------------------------- */
const lightThemeLayers: Layers = {
  low: "20, 13%, 11%",
  medium: "20, 13%, 14%",
  high: "20, 13%, 15%",
}

export const lightThemeLayer = (value: LayerNames) =>
  createHsl(lightThemeLayers[value])

export const lightThemeLayerAlpha = (value: LayerNames, alpha: number) =>
  createHsla(lightThemeLayers[value], alpha)

/* Dark theme foreground
------------------------------------------------- */

// Text
const darkThemeForegroundHSL: Greys = {
  extraLow: "215, 13%, 20%",
  low: "206, 11%, 35%",
  medium: "206, 10%, 49%",
  high: "206, 8%, 62%",
  extraHigh: "0, 0%, 100%",
}

export const darkThemeForeground = (value: GreyNames) =>
  createHsl(darkThemeForegroundHSL[value])

export const darkThemeForegroundAlpha = (value: GreyNames, alpha: number) =>
  createHsla(darkThemeForegroundHSL[value], alpha)

/* Light theme foreground
------------------------------------------------- */

// Text
const lightThemeForegroundHSL: Greys = {
  extraLow: "240, 17%, 2%",
  low: "240, 15%, 5%",
  medium: "240, 15%, 11%",
  high: "240, 10%, 14%",
  extraHigh: "240, 8%, 18%",
}

export const lightThemeForeground = (value: GreyNames) =>
  createHsl(darkThemeForegroundHSL[value])

export const lightThemeForegroundAlpha = (value: GreyNames, alpha: number) =>
  createHsla(darkThemeForegroundHSL[value], alpha)

const lightTheme: Theme = {
  name: "light",
  text: lightThemeForegroundHSL,
  layerTone: lightThemeLayers,
}

const darkTheme: Theme = {
  name: "dark",
  text: darkThemeForegroundHSL,
  layerTone: darkThemeLayers,
}

export const themes: { [key: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const themeForeground = (value: GreyNames) => css`
  ${props => createHsl(props.theme.text[value])}
`

export const themeForegroundAlpha = (value: GreyNames, alpha: number) => css`
  ${props => createHsla(props.theme.text[value], alpha)}
`

export const themeLayer = (value: LayerNames) => css`
  ${props => createHsl(props.theme.layerTone[value])}
`

export const themeLayerAlpha = (value: LayerNames, alpha: number) => css`
  ${props => createHsla(props.theme.layerTone[value], alpha)}
`

export const isDarkTheme = (output: string | CSSProp) => css`
  ${props => props.theme.name === "dark" && output}
`

export const isLightTheme = (output: string | CSSProp) => css`
  ${props => props.theme.name === "light" && output}
`

export const isTheme = (
  themeName: ThemeName,
  validOutput: string | CSSProp,
  invalidOutput?: string | CSSProp
) => css`
  ${props => {
    if (invalidOutput) {
      return props.theme.name === themeName ? validOutput : invalidOutput
    } else {
      return props.theme.name === themeName && validOutput
    }
  }}
`
