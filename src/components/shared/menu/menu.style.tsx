import styled from "styled-components"
import { zIndex, darkGrey, spacingScale, typeScale } from "@style/variables"
import { themeTone } from "@style/theme"
import { mq, scaleBetween, scaleGreaterThan } from "@style/media-queries"

export const menuZindex = zIndex.highest

export const AnimationScrim = styled.div`
  background-color: ${darkGrey(100)};
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${zIndex.low};
`

export const Fixer = styled.div`
  position: fixed;
  display: flex;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  justify-content: flex-end;

  z-index: ${menuZindex};

  ${mq.lessThan("bottomPalm")`
    justify-content: flex-end;
  `}

  visibility: hidden;
`

export const Sidebar = styled.div`
  position: relative;
  display: flex;

  align-items: center;

  padding-left: ${spacingScale[8]};
  padding-right: ${spacingScale[8]};
  padding-bottom: ${spacingScale[8]};

  height: 100%;

  z-index: ${zIndex.high + 1};

  overflow: hidden;

  background-color: ${themeTone(100)};
  transform: translate3d(0, 0, 0);

  ${mq.lessThan("bottomPalm")`
    width: 100%;
  `}

  ${scaleBetween(
    "padding-left",
    spacingScale[8],
    spacingScale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-bottom",
    spacingScale[8],
    spacingScale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-right",
    spacingScale[8],
    spacingScale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("padding-left", spacingScale[9], "topUltra")}
  ${scaleGreaterThan("padding-right", spacingScale[9], "topUltra")}
  ${scaleGreaterThan("padding-bottom", spacingScale[9], "topUltra")}
`

export const Contents = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 100%;

  z-index: ${zIndex.high};
`

export const SidebarNav = styled.nav`
  display: flex;

  align-items: center;
  width: 100%;
  flex: 1;
`

export const SidebarNavInner = styled.div`
  margin-bottom: -12.5vh;
  width: 100%;
`

export const SocialContainer = styled.div`
  font-size: ${typeScale[5]};
  
  ${scaleBetween(
    "font-size",
    typeScale[5],
    typeScale[6],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    typeScale[6],
    typeScale[7],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", typeScale[7], "topUltra")}
`
