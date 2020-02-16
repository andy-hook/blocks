export type GreyNames =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000

export type Greys = { [key in GreyNames]: string }

export type ThemeName = "light" | "dark"

export type LayerNames = "low" | "medium" | "high"

export type Layers = { [key in LayerNames]: string }

export interface Theme {
  name: ThemeName
  text: Greys
  tone: Greys
  layerTone: Layers
}
