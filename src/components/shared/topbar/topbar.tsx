import React, { memo, useState, useEffect } from "react"
import styled from "styled-components"
import { mq } from "@style/media-queries"
import NavList from "./nav-list/nav-list"
import { layout, type } from "@style/design-tokens"
import Icon from "@components/shared/icon/icon"
import { useThemeSwitchContext } from "@providers/theme-switch-provider/theme-switch-provider"
import useScrollPosition from "@hooks/scroll-position"
import { themeTone, themeText, themeLayer, isTheme } from "@style/theme"
import { Link } from "gatsby"
import { generateBlockNumberFromStaticRange } from "@utils"
import { useSpring, animated } from "react-spring"

const Topbar: React.FunctionComponent = memo(() => {
  const { themeType, setThemeTypeStatus } = useThemeSwitchContext()
  const [randomBlockNumber, setRandomBlockNumber] = useState<number>()
  const [topbarScrolled, setTopbarScrolled] = useState(false)

  const animateMarkMove = useSpring({
    transform: topbarScrolled
      ? `translate3d(0rem,0,0)`
      : `translate3d(-${layout.scale[11]},0,0)`,
  })

  const animateTopbarBg = useSpring({
    opacity: topbarScrolled ? 1 : 0,
  })

  function toggleTheme() {
    themeType === "light"
      ? setThemeTypeStatus("dark")
      : setThemeTypeStatus("light")
  }

  function generateRandomBlockNumber() {
    setRandomBlockNumber(
      generateBlockNumberFromStaticRange({ min: 1, max: 9000000 })
    )
  }

  useScrollPosition(({ currPos }) => {
    const scrollThreshhold = 200
    const scrollMoreThan = currPos.y > scrollThreshhold
    const scrolledLessThan = currPos.y < scrollThreshhold

    if (scrollMoreThan) {
      setTopbarScrolled(true)
    } else if (scrolledLessThan) {
      setTopbarScrolled(false)
    }
  })

  // Generate random number on initial render only
  useEffect(() => {
    generateRandomBlockNumber()
  }, [])

  return (
    <TopbarContainer>
      {/* Left navigation */}
      <TopbarMainNav>
        <animated.div style={animateMarkMove}>
          <TopbarBrandMark to="/">
            <Icon name="blocks" />
          </TopbarBrandMark>
        </animated.div>

        <animated.div style={animateMarkMove}>
          <TopbarNavList />
        </animated.div>
      </TopbarMainNav>

      {/* Right controls */}
      <TopbarControls>
        <TopbarThemeSwitch onClick={toggleTheme}>
          <Icon name={themeType === "light" ? "dark-mode" : "light-mode"} />
        </TopbarThemeSwitch>

        <TopbarShuffle
          to={`/block/${randomBlockNumber}`}
          onClick={generateRandomBlockNumber}
        >
          <Icon name="shuffle" />
        </TopbarShuffle>
      </TopbarControls>
      <TopbarContainerBg style={animateTopbarBg} />
    </TopbarContainer>
  )
})

const TopbarContainer = styled.div`
  position: fixed;
  display: flex;

  justify-content: space-between;

  top: 0;
  left: 0;
  width: 100%;

  z-index: ${layout.zIndex.high};

  padding: ${layout.scale[6]} ${layout.scale[6]};

  ${mq.greaterThan("topLap")`
    padding: ${layout.scale[7]} ${layout.scale[8]};
  `}
`

const TopbarContainerBg = styled(animated.div)`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  /* background-color: ${themeTone(100)}; */

  background-color: ${isTheme("dark", themeLayer("low"), "blue")};

  z-index: ${layout.zIndex.floor};
`

const TopbarMainNav = styled.div`
  position: relative;
  display: flex;

  overflow: hidden;

  align-items: center;

  z-index: ${layout.zIndex.low};
`

const TopbarBrandMark = styled(Link)`
  position: absolute;
  top: 50%;
  left: 0;

  color: ${themeText(100)};

  font-size: ${type.scale[6]};

  ${mq.greaterThan("topLap")`
    font-size: ${type.scale[7]};
  `}

  ${mq.greaterThan("topWide")`
    font-size: ${type.scale[8]};
  `}

  &::after {
    content: "";

    position: absolute;

    top: 50%;
    right: -${layout.scale[6]};

    width: 1px;
    height: 75%;

    background-color: ${themeText(1000)};

    transform: translateY(-50%);
  }

  transform: translateY(-50%);
`

const TopbarNavList = styled(NavList)`
  padding-left: ${layout.scale[11]};
`

const TopbarControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  color: ${themeText(300)};

  font-size: ${type.scale[6]};

  ${mq.greaterThan("topLap")`
    font-size: ${type.scale[7]};
  `}

  ${mq.greaterThan("topWide")`
    font-size: ${type.scale[8]};
  `}

  z-index: ${layout.zIndex.low};
`

const TopbarThemeSwitch = styled.button``

const TopbarShuffle = styled(Link)`
  margin-left: ${layout.scale[5]};

  ${mq.greaterThan("topLap")`
    margin-left: ${layout.scale[6]};
  `}
`

export default Topbar
