import React, { memo, MutableRefObject } from "react"
import {
  PAGE_LEAVE_DURATION,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_ENTER,
} from "@hooks/page-transition"
import classNames from "classnames"
import styled from "styled-components"
import {
  typeBaseSemibold,
  typeSizeBaseXs,
  setBaseCropAndLineHeight,
} from "@style/typography"
import Link from "gatsby-plugin-transition-link"
import { themeText } from "@style/theme"
import { type } from "@style/variables"

export interface Props {
  className?: string
}

export const linkProps = {
  activeClassName: "active",

  exit: {
    state: {
      animType: TRANSITION_TYPE_EXIT,
    },
    length: PAGE_LEAVE_DURATION, // Should match entry delay
  },
  entry: {
    state: {
      animType: TRANSITION_TYPE_ENTER,
    },
    delay: PAGE_LEAVE_DURATION, // How long the current page should show for before changing scroll position
    length: PAGE_LEAVE_DURATION,
  },
}

const NavList: React.FunctionComponent<Props> = memo(({ className }) => {
  const navRef = React.useRef() as MutableRefObject<HTMLDivElement>

  return (
    <Container ref={navRef} className={classNames("", className)}>
      <List>
        <ListItem>
          <ListItemLink to="/" {...linkProps}>
            Ten Blocks
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLink to="/about/" {...linkProps}>
            About
          </ListItemLink>
        </ListItem>
      </List>
    </Container>
  )
})

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
  ${setBaseCropAndLineHeight(type.lineHeight.display.regular)}

  display: block;
  color: ${themeText(1000)};

  padding: ${itemPadding};

  &.active {
    color: ${themeText(400)};
  }
`

export default NavList
