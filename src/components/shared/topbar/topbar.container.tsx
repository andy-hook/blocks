import React, { memo } from "react"
import Topbar from "./topbar"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Store } from "@custom-types/store"
import {
  menuOpenAction,
  topbarVisibleAction,
  lightThemeEnabledAction,
} from "@store/actions"
import useScrollPosition from "@hooks/use-scroll-position"
import { useInView } from "react-intersection-observer"
import { menuZindex } from "../menu/menu.style"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan } from "@style/media-queries"
import styled from "styled-components"

interface DispatchProps {
  openMenu: () => void
  closeMenu: () => void
  showTopbar: () => void
  hideTopbar: () => void
  toggleTheme: (activeTheme: Store["lightThemeEnabled"]) => void
}

interface StateProps {
  menuOpen: Store["menuOpen"]
  topbarVisible: Store["topbarVisible"]
  lockTopbar: Store["lockTopbar"]
  lightThemeEnabled: Store["lightThemeEnabled"]
}

type ContainerProps = DispatchProps & StateProps

const mapStateToProps = ({
  menuOpen,
  topbarVisible,
  lockTopbar,
  lightThemeEnabled,
}: Store) => {
  return { menuOpen, topbarVisible, lockTopbar, lightThemeEnabled }
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
    toggleTheme: (activeTheme: Store["lightThemeEnabled"]) => {
      dispatch(lightThemeEnabledAction(!activeTheme))
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
    lightThemeEnabled,
    toggleTheme,
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

    function toggleActiveTheme() {
      toggleTheme(lightThemeEnabled)
    }

    return (
      <>
        <Topbar
          open={menuOpen}
          visible={topbarVisible}
          openMenu={openMenu}
          closeMenu={closeMenu}
          toggleTheme={toggleActiveTheme}
        />
        <HideOffsetHolder ref={offsetHolderInviewRef} />
      </>
    )
  }
)

export const HideOffsetHolder = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;

  pointer-events: none;

  z-index: ${menuZindex - 1};

  height: ${rem("100px")};

  ${scaleBetween(
    "height",
    rem("65px"),
    rem("300px"),
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("height", rem("300px"), "topUltra")}
`

const ConnectedTopbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopbarContainer)

export default ConnectedTopbar
