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
