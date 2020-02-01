import styled from "styled-components"
import { zIndex } from "@style/variables"
import { Props } from "./navicon"

export const NaviconContainer = styled.button<Props>`
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 4.5em;

  width: 1em;
  height: 1em;
`

export const BarsSVG = styled.svg`
  display: block;

  font-size: 0.425em;

  height: 1em;
  width: 1em;

  margin-bottom: -0.05em;

  z-index: ${zIndex.low};

  fill: white;

  & rect {
    fill: inherit;
  }
`
