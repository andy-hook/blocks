import styled from "styled-components"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"

export const Container = styled.div`
  padding-top: 10rem;

  ${scaleBetween("padding-top", "10rem", "15rem", "topThumb", "bottomUltra")}

  ${scaleGreaterThan("padding-top", "15rem", "topUltra")}
`
