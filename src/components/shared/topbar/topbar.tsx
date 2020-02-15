import React, { memo } from "react"
import { smallScreenGutter } from "../gutter/gutter"
import styled, { css } from "styled-components"
import { mq } from "@style/media-queries"
import NavList from "./nav-list/nav-list"
import { layout, animation } from "@style/design-tokens"
import Icon from "@components/shared/icon/icon"
import { useThemeSwitchContext } from "@providers/theme-switch-provider/theme-switch-provider"
import useScrollPosition from "@hooks/scroll-position"

const Topbar: React.FunctionComponent = memo(() => {
  const { themeType, setThemeTypeStatus } = useThemeSwitchContext()

  useScrollPosition(({ prevPos, currPos }) => {
    const canHideTopbar = currPos.y > prevPos.y
    const canShowTopbar = currPos.y <= prevPos.y

    if (canHideTopbar) {
      // console.log("hide topbar")
    } else if (canShowTopbar) {
      // console.log("show topbar")
    }
  })

  function toggleTheme() {
    themeType === "light"
      ? setThemeTypeStatus("dark")
      : setThemeTypeStatus("light")
  }

  return (
    <TopbarContainer visible={true}>
      <TopbarNavList />

      <TopbarShuffle onClick={toggleTheme}>
        <Icon name="shuffle" />
      </TopbarShuffle>
    </TopbarContainer>
  )
})

const TopbarContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  display: flex;

  justify-content: space-between;

  top: 0;
  left: 0;
  width: 100%;

  padding-left: ${smallScreenGutter};
  padding-right: ${smallScreenGutter};

  transition: transform 1.5s ${animation.ease("easeOutCirc")};

  transform: translate3d(0, -100%, 0);

  z-index: ${layout.zIndex.high};
  ${props =>
    props.visible &&
    css`
      transform: translate3d(0, 0, 0);
    `};
`

const TopbarNavList = styled(NavList)`
  z-index: ${layout.zIndex.medium};
  display: flex;

  align-items: center;

  ${mq.lessThan("bottomPalm")`
    display: none;
  `}
`

const TopbarShuffle = styled.button`
  color: red;

  display: flex;
`

export default Topbar
