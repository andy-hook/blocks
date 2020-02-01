import styled from "styled-components"
import { borderThickness } from "@style/variables"
import { themeTone } from "@style/theme"
import { typeTitle } from "@style/typography"

export const Container = styled.footer`
  ${typeTitle}
  height: 100px;
  border-top: ${borderThickness.regular} solid ${themeTone(300)};
`
