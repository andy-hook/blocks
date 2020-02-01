import Link from "gatsby-plugin-transition-link"
import styled from "styled-components"
import {
  typeBaseSemibold,
  typeSizeBaseXs,
  setBaseCropAndLineHeight,
} from "@style/typography"
import { themeText } from "@style/theme"
import { lineHeight } from "@style/variables"

export const Container = styled.nav``

const itemPadding = "1em"

export const List = styled.ul`
  ${typeBaseSemibold}
  ${typeSizeBaseXs}

  display: flex;
  margin-right: -${itemPadding};
  margin-left: -${itemPadding};
`

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 0.8em;
  }
`

export const ListItemLink = styled(Link)`
  ${setBaseCropAndLineHeight(lineHeight.display.regular)}

  display: block;
  color: ${themeText(1000)};

  padding: ${itemPadding};

  &.active {
    color: ${themeText(400)};
  }
`
