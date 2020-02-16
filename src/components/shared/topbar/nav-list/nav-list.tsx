import React, { memo, MutableRefObject } from "react"

import classNames from "classnames"
import styled, { css } from "styled-components"
import { setBaseCropAndLineHeight, typeDisplayBold } from "@style/typography"
import { Link } from "gatsby"
import { themeText } from "@style/theme"
import { type, layout } from "@style/design-tokens"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { mq } from "@style/media-queries"

interface Props {
  className?: string
}

const NavList: React.FunctionComponent<Props> = memo(({ className }) => {
  const navRef = React.useRef() as MutableRefObject<HTMLDivElement>

  return (
    <Container ref={navRef} className={classNames("", className)}>
      <List>
        <ListItem>
          <ListItemLink to="/" activeClassName="active">
            Latest Blocks
          </ListItemLink>
        </ListItem>
        <ListItem>
          <ListItemLinkOutbound
            href="https://github.com/andy-hook/ten-blocks"
            target="_blank"
          >
            Github
          </ListItemLinkOutbound>
        </ListItem>
      </List>
    </Container>
  )
})

const Container = styled.nav``

const List = styled.ul`
  ${typeDisplayBold}

  display: flex;
  margin: -${layout.scale[2]};
  font-size: ${type.scale[3]};

  ${mq.greaterThan("topLap")`
    font-size: ${type.scale[4]};
    margin: -${layout.scale[4]};
  `}
`

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 0.8em;
  }
`

const ListLinkStyle = css`
  ${setBaseCropAndLineHeight(type.lineHeight.display.regular)}

  display: block;
  color: ${themeText(1000)};

  padding: ${layout.scale[2]};

  ${mq.greaterThan("topLap")`
    padding: ${layout.scale[4]};
  `}

  &.active {
    color: ${themeText(400)};
  }
`

const ListItemLink = styled(Link)`
  ${ListLinkStyle}
`

const ListItemLinkOutbound = styled(OutboundLink)`
  ${ListLinkStyle}
`

export default NavList
