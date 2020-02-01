import styled from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import { zIndex } from "@style/variables"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${zIndex.highest};
`

export const Mark = styled.div`
  width: 1em;
  height: 1em;

  opacity: 0;

  font-size: ${rem("75px")};

  ${scaleBetween(
    "font-size",
    rem("75px"),
    rem("100px"),
    "bottomThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("max-width", rem("100px"), "topUltra")}
`

export const MarkSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
`

export const BoltPath = styled.path`
  fill: white;
`
