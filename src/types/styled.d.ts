// Extend original declarations with theme interface
import "styled-components"
import { Theme } from "./theme"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
