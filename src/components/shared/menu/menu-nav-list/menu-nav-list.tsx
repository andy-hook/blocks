import React, { memo, MutableRefObject } from "react"
import * as S from "./menu-nav-list.style"
import {
  PAGE_LEAVE_DURATION,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_MENU_ENTER,
} from "@constants"
import useDeferredRunEffect from "@hooks/deferred-run"
import gsap from "gsap"

interface Props {
  onClick: () => void
  open: boolean
}

export const linkProps = {
  exit: {
    state: {
      animType: TRANSITION_TYPE_EXIT,
    },
    length: PAGE_LEAVE_DURATION, // Should match entry delay
  },
  entry: {
    state: {
      animType: TRANSITION_TYPE_MENU_ENTER,
    },
    delay: PAGE_LEAVE_DURATION, // How long the current page should show for before changing scroll position
    length: PAGE_LEAVE_DURATION,
  },
}

type Refs<T> = Array<MutableRefObject<T>>

const MenuNavList: React.FunctionComponent<Props> = memo(
  ({ onClick, open }) => {
    const refs = [React.createRef(), React.createRef()] as Refs<HTMLLIElement>
    const cachedRefs = React.useRef<Refs<HTMLLIElement>>(refs)
    const listRef = React.useRef() as MutableRefObject<HTMLUListElement>

    const startDelay = 0.25

    const animateOpen = () => {
      gsap.fromTo(
        listRef.current,
        {
          y: `${150}%`,
        },
        {
          duration: 1,
          ease: "expo.out",
          delay: startDelay,
          y: "0%",
          clearProps: "transform",
          overwrite: true,
        }
      )

      cachedRefs.current.map((listItem, index) => {
        gsap.fromTo(
          listItem.current,
          {
            opacity: 0,
            y: `${100 + index * 100}%`,
          },
          {
            duration: 1,
            ease: "expo.out",
            delay: startDelay + index * 0.05,
            y: "0%",
            opacity: 1,
            clearProps: "transform",
            overwrite: true,
          }
        )
      })
    }
    const animateClose = () => {
      cachedRefs.current.map(listItem => {
        gsap.to(listItem.current, {
          duration: 0.25,
          opacity: 0,
          clearProps: "opacity",
          overwrite: true,
        })
      })
    }

    useDeferredRunEffect(() => {
      open ? animateOpen() : animateClose()
    }, [open])

    return (
      <S.List ref={listRef}>
        <S.ListItem ref={cachedRefs.current[0]}>
          <S.ListItemLink to="/" onClick={onClick} {...linkProps}>
            Ten Blocks
          </S.ListItemLink>
        </S.ListItem>
        <S.ListItem ref={cachedRefs.current[1]}>
          <S.ListItemLink to="/about/" onClick={onClick} {...linkProps}>
            About
          </S.ListItemLink>
        </S.ListItem>
      </S.List>
    )
  }
)

export default MenuNavList
