import styled from "styled-components"
import { typeSizeBaseXs, typeBodySubtle } from "@style/typography"
import Link from "gatsby-plugin-transition-link"

export const List = styled.ul`
  ${typeSizeBaseXs}

  display: flex;
  flex-direction: column;
`

export const ListItem = styled.li`
  margin-bottom: 0.5em;
  opacity: 0;
`

export const ListItemLink = styled(Link)`
  ${typeBodySubtle}

  padding-top: 0.25em;
  padding-bottom: 0.25em;

  display: block;
`
