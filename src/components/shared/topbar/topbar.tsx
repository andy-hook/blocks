import React, { memo, useState, useEffect } from "react"
import styled from "styled-components"
import { mq } from "@style/media-queries"
import NavList from "./nav-list/nav-list"
import { layout, type } from "@style/design-tokens"
import Icon from "@components/shared/icon/icon"
import { useThemeSwitchContext } from "@providers/theme-switch-provider/theme-switch-provider"
import useScrollPosition from "@hooks/scroll-position"
import { typeSizeBaseLg } from "@style/typography"
import { themeTone, themeText } from "@style/theme"
import { Link } from "gatsby"
import { generateBlockNumberFromStaticRange } from "@utils"

const Topbar: React.FunctionComponent = memo(() => {
  const { themeType, setThemeTypeStatus } = useThemeSwitchContext()
  const [randomBlockNumber, setRandomBlockNumber] = useState<number>()
  const [topbarScrolled, setTopbarScrolled] = useState(false)

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

  // Generate random number on initial render
  useEffect(() => {
    generateRandomBlockNumber()
  }, [])

  return (
    <TopbarContainer darken={topbarScrolled}>
      <TopbarNavList />

      <TopbarControls>
        <TopbarThemeSwitch onClick={toggleTheme}>
          <Icon name="shuffle" />
        </TopbarThemeSwitch>

        <TopbarShuffle
          to={`/block/${randomBlockNumber}`}
          onClick={generateRandomBlockNumber}
        >
          <Icon name="shuffle" />
        </TopbarShuffle>
      </TopbarControls>
    </TopbarContainer>
  )
})

const TopbarContainer = styled.div<{ darken: boolean }>`
  ${typeSizeBaseLg}

  position: fixed;
  display: flex;

  justify-content: space-between;

  top: 0;
  left: 0;
  width: 100%;

  padding: ${layout.scale[5]} ${layout.scale[8]};

  z-index: ${layout.zIndex.high};

  background-color: ${props => (props.darken ? themeTone(100) : "transparent")};
`

const TopbarNavList = styled(NavList)`
  z-index: ${layout.zIndex.medium};
  display: flex;

  align-items: center;

  ${mq.lessThan("bottomPalm")`
    display: none;
  `}
`

const TopbarControls = styled.div`
  color: ${themeText(300)};
  display: flex;
  align-items: center;
  font-size: ${type.scale[7]};
`

const TopbarThemeSwitch = styled.button``

const TopbarShuffle = styled(Link)`
  margin-left: ${layout.scale[5]};
`

export default Topbar
