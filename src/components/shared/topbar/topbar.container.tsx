import React, { memo, useState } from "react"
import Topbar from "./topbar"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Store } from "@custom-types/store"
import { menuOpenAction, topbarVisibleAction } from "@store/actions"
import { ThemeProvider } from "styled-components"
import { themes } from "@style/theme"
import useScrollPosition from "@hooks/use-scroll-position"
import * as S from "./topbar.style"
import { useInView } from "react-intersection-observer"

interface DispatchProps {
  openMenu: () => void
  closeMenu: () => void
  showTopbar: () => void
  hideTopbar: () => void
  menuOpen: Store["menuOpen"]
  topbarVisible: Store["topbarVisible"]
  lockTopbar: Store["lockTopbar"]
}

type ContainerProps = DispatchProps

const mapStateToProps = ({ menuOpen, topbarVisible, lockTopbar }: Store) => {
  return { menuOpen, topbarVisible, lockTopbar }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openMenu: () => {
      dispatch(menuOpenAction(true))
    },
    closeMenu: () => {
      dispatch(menuOpenAction(false))
    },
    showTopbar: () => {
      dispatch(topbarVisibleAction(true))
    },
    hideTopbar: () => {
      dispatch(topbarVisibleAction(false))
    },
  }
}

const TopbarContainer: React.FunctionComponent<ContainerProps> = memo(
  ({
    menuOpen,
    openMenu,
    closeMenu,
    topbarVisible,
    showTopbar,
    hideTopbar,
    lockTopbar,
  }) => {
    const [offsetHolderInviewRef, inView] = useInView()

    useScrollPosition(({ prevPos, currPos }) => {
      const canHideTopbar = currPos.y > prevPos.y
      const canShowTopbar = currPos.y <= prevPos.y

      if (!lockTopbar) {
        if (canHideTopbar && topbarVisible && !menuOpen && !inView) {
          hideTopbar()
        } else if (canShowTopbar && !topbarVisible && !menuOpen) {
          showTopbar()
        }
      }
    })

    return (
      <ThemeProvider theme={themes.dark}>
        <>
          <Topbar
            open={menuOpen}
            visible={topbarVisible}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
          <S.HideOffsetHolder ref={offsetHolderInviewRef} />
        </>
      </ThemeProvider>
    )
  }
)

const ConnectedTopbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarContainer)

export default ConnectedTopbar
