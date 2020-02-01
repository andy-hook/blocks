import styled from "styled-components"
import { mq } from "@style/media-queries"
import { rem } from "polished"

export const smallScreenGutter = rem("25px")

export const GutterContainer = styled.div`
  padding-left: ${smallScreenGutter};
  padding-right: ${smallScreenGutter};

  ${mq.between("topThumb", "topDesk")`
    padding-left: 7%;
    padding-right: 7%;
  `}

  ${mq.between("bottomDesk", "bottomUltra")`
    padding-left: 9%;
    padding-right: 9%;
  `}

  width: 100%;
`
