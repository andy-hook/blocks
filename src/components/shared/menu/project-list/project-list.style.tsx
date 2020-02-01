import { typeTitle } from "@style/typography"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link"
import { scaleBetween, scaleGreaterThan, mq } from "@style/media-queries"
import { typeScale } from "@style/variables"

const paddingY = "0.3em"

export const ProjectListOuter = styled.div`
  margin-top: -${paddingY};
  margin-bottom: -${paddingY};
`

export const ProjectList = styled.ul`
  font-size: ${typeScale[9]};

  ${scaleBetween(
    "font-size",
    typeScale[9],
    typeScale[10],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan(
    "font-size",
    typeScale[10],
    "topUltra"
  )}
  
  margin-bottom: 0.75em;
`

export const ProjectListItem = styled.li`
  opacity: 0;
`

export const ProjectLink = styled(Link)`
  ${typeTitle}

  display: block;
  padding-top: ${paddingY};
  padding-bottom: ${paddingY};

  ${mq.lessThan("bottomPalm")`
    width: 100%;
  `}

  ${mq.greaterThan("topPalm")`
    min-width: 11em;
  `};
`
