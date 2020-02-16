import {
  Theme,
  GreyNames,
  ThemeName,
  Greys,
  Layers,
  LayerNames,
} from "@custom-types/theme"
import { css, CSSProp } from "styled-components"
import { createHsl, createHsla } from "@style/utils"

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

/* Dark theme greys
------------------------------------------------- */

// Tone
const darkThemeToneHSL: Greys = {
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
const darkThemeTextHSL: Greys = {
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
const lightThemeToneHSL: Greys = {
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
const lightThemeTextHSL: Greys = {
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

const lightTheme: Theme = {
  name: "light",
  text: lightThemeTextHSL,
  tone: lightThemeToneHSL,
  layerTone: lightThemeLayers,
}

const darkTheme: Theme = {
  name: "dark",
  text: darkThemeTextHSL,
  tone: darkThemeToneHSL,
  layerTone: darkThemeLayers,
}

export const themes: { [key: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
}

export const themeTone = (value: GreyNames) => css`
  ${props => createHsl(props.theme.tone[value])}
`

export const themeToneAlpha = (value: GreyNames, alpha: number) => css`
  ${props => createHsla(props.theme.tone[value], alpha)}
`

export const themeText = (value: GreyNames) => css`
  ${props => createHsl(props.theme.text[value])}
`

export const themeTextAlpha = (value: GreyNames, alpha: number) => css`
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
