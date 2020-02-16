export type GreyNames = "extraLow" | "low" | "medium" | "high" | "extraHigh"

export type Greys = { [key in GreyNames]: string }

export type ThemeName = "light" | "dark"

export type LayerNames = "low" | "medium" | "high"

export type Layers = { [key in LayerNames]: string }

export interface Theme {
  name: ThemeName
  text: Greys
  layerTone: Layers
}
