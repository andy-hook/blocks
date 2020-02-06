import React, { memo } from "react"
import Navicon from "./navicon/navicon"
import { menuIsAnimating } from "@components/shared/menu/menu"
import { smallScreenGutter } from "../gutter/gutter"
import { rem } from "polished"
import styled, { css } from "styled-components"
import { scaleBetween, scaleGreaterThan, mq } from "@style/media-queries"
import { menuZindex } from "../menu/menu"
import { themeTone } from "@style/theme"
import NavList from "./nav-list/nav-list"
import { typeSizeBaseXs } from "@style/typography"
import { layout, animation } from "@style/design-tokens"

interface Props {
  open: boolean
  visible: boolean
  openMenu: () => void
  closeMenu: () => void
  toggleTheme: () => void
}

const Topbar: React.FunctionComponent<Props> = memo(
  ({ open, openMenu, closeMenu, visible, toggleTheme }) => {
    const toggleMenu = () => {
      if (menuIsAnimating) {
        return
      }

      open ? closeMenu() : openMenu()
    }

    return (
      <>
        <TopbarOver visible={visible}>
          <TopbarNavicon>
            <Navicon open={open} onClick={toggleTheme} />
            <Navicon open={open} onClick={toggleMenu} />
          </TopbarNavicon>
        </TopbarOver>

        <TopbarUnder visible={visible}>
          <TopbarNavContainer>
            <StyledNavList />
          </TopbarNavContainer>
        </TopbarUnder>
      </>
    )
  }
)

const spacingXSmall = smallScreenGutter
const spacingXBig = rem("35px")

const topbarHeight = css`
  height: ${rem("56px")};

  ${scaleBetween("height", rem("56px"), rem("76px"), "topThumb", "bottomUltra")}

  ${scaleGreaterThan("height", rem("76px"), "topUltra")}
`

const topbarFixed = css`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
`

const paddingX = css`
  padding-left: ${spacingXSmall};
  padding-right: ${spacingXSmall};

  ${scaleBetween(
    "padding-left",
    spacingXSmall,
    spacingXBig,
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-right",
    spacingXSmall,
    spacingXBig,
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("padding-left", spacingXBig, "topUltra")}
  ${scaleGreaterThan("padding-right", spacingXBig, "topUltra")}
`

const visiblityTransition = styled.div<{ visible: boolean }>`
  ${topbarFixed}

  transition: transform 1.5s ${animation.ease("easeOutCirc")};

  transform: translate3d(0, -100%, 0);

  ${props =>
    props.visible &&
    css`
      transform: translate3d(0, 0, 0);
    `}
`

const TopbarOver = styled(visiblityTransition)`
  ${topbarHeight}
  ${paddingX}

  display: flex;
  align-items: center;

  justify-content: flex-end;

  z-index: ${menuZindex + 1};

  mix-blend-mode: difference;
  pointer-events: none;
`

export const TopbarUnder = styled(visiblityTransition)`
  z-index: ${menuZindex - 1};
`

export const TopbarNavContainer = styled.div`
  ${topbarHeight}
  ${paddingX}

  position: relative;

  display: flex;
  align-items: center;

  /* Background colour */
  &::before {
    transition: opacity 0.2s ease;

    content: "";

    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: ${themeTone(200)};

    z-index: ${layout.zIndex.floor};

    opacity: 1;
  }
`

export const StyledNavList = styled(NavList)`
  z-index: ${layout.zIndex.medium};
  display: flex;

  align-items: center;

  ${mq.lessThan("bottomPalm")`
    display: none;
  `}
`

export const TopbarNavicon = styled.div`
  /* Align scaling with navigation text */
  ${typeSizeBaseXs}

  display: flex;

  margin-right: -1.25em;

  pointer-events: auto;

  ${mq.greaterThan("topPalm")`
    margin-left: -1.25em;
  `}
`

export default Topbar
