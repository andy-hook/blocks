import React, { memo, MutableRefObject } from "react"
import * as S from "./nav-list.style"
import {
  PAGE_LEAVE_DURATION,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_ENTER,
} from "@constants"
import classNames from "classnames"

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
    <S.Container ref={navRef} className={classNames("", className)}>
      <S.List>
        <S.ListItem>
          <S.ListItemLink to="/" {...linkProps}>
            Ten Blocks
          </S.ListItemLink>
        </S.ListItem>
        <S.ListItem>
          <S.ListItemLink to="/about/" {...linkProps}>
            About
          </S.ListItemLink>
        </S.ListItem>
      </S.List>
    </S.Container>
  )
})

export default NavList
