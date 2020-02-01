import styled, { css } from "styled-components"
import { rem } from "polished"
import { scaleBetween, scaleGreaterThan, mq } from "@style/media-queries"
import { zIndex, borderThickness, ease } from "@style/variables"
import { typeSizeBaseXs } from "@style/typography"
import { themeTone } from "@style/theme"
import { menuZindex } from "../menu/menu.style"
import { smallScreenGutter } from "@components/shared/gutter/gutter.style"
import NavList from "./nav-list/nav-list"

interface StyleProps {
  visible?: boolean
}

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

const visiblityTransition = styled.div<StyleProps>`
  ${topbarFixed}

  transition: transform 1.5s ${ease("easeOutCirc")};

  transform: translate3d(0, -100%, 0);

  ${props =>
    props.visible &&
    css`
      transform: translate3d(0, 0, 0);
    `}
`

export const Over = styled(visiblityTransition)`
  ${topbarHeight}
  ${paddingX}

  display: flex;
  align-items: center;

  justify-content: flex-end;

  z-index: ${menuZindex + 1};

  mix-blend-mode: difference;
  pointer-events: none;
`

export const Under = styled(visiblityTransition)`
  z-index: ${menuZindex - 1};
`

export const ContainerInner = styled.div<StyleProps>`
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

    z-index: ${zIndex.floor};

    opacity: 1;
  }

  /* Underline */
  &::after {
    transition: opacity 0.2s ease;

    content: "";
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: ${borderThickness.regular};
    background-color: ${themeTone(600)};

    z-index: ${zIndex.low};
  }
`

export const StyledNavList = styled(NavList)`
  z-index: ${zIndex.medium};
  display: flex;

  align-items: center;

  ${mq.lessThan("bottomPalm")`
    display: none;
  `}
`

export const NaviconSizing = styled.div`
  /* Align scaling with navigation text */
  ${typeSizeBaseXs}

  margin-right: -1.25em;

  pointer-events: auto;

  ${mq.greaterThan("topPalm")`
    margin-left: -1.25em;
  `}
`

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
