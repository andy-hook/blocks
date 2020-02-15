import React, { memo, MutableRefObject } from "react"
import classNames from "classnames"
import gsap from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import styled from "styled-components"
import { layout } from "@style/design-tokens"

export interface Props {
  open?: boolean
  className?: string
  onClick: () => void
}

const Navicon: React.FunctionComponent<Props> = ({
  onClick,
  open,
  className,
}) => {
  const topBar = React.useRef() as MutableRefObject<SVGRectElement>
  const bottomBar = React.useRef() as MutableRefObject<SVGRectElement>

  const animateOpen = () => {
    gsap.set(topBar.current, { transformOrigin: "center center" })
    gsap.set(bottomBar.current, { transformOrigin: "center center" })

    gsap.to(topBar.current, {
      duration: 1,
      ease: "expo.out",
      rotation: 45,
      y: 3.5,
    })

    gsap.to(bottomBar.current, {
      duration: 1,
      ease: "expo.out",
      rotation: -45,
      y: -3.5,
    })
  }

  const animateClose = () => {
    gsap.to(topBar.current, {
      duration: 1,
      ease: "expo.out",
      rotation: 0,
      y: 0,
    })

    gsap.to(bottomBar.current, {
      duration: 1,
      ease: "expo.out",
      rotation: 0,
      y: 0,
    })
  }

  useDeferredRunEffect(() => {
    open ? animateOpen() : animateClose()
  }, [open])

  return (
    <NaviconContainer
      className={classNames("", className)}
      onClick={onClick}
      open={open}
    >
      <BarsSVG viewBox="0 0 25 25">
        <rect x="1" y="8" width="23" height="2" ref={topBar} />
        <rect x="1" y="15" width="23" height="2" ref={bottomBar} />
      </BarsSVG>
    </NaviconContainer>
  )
}

const NaviconContainer = styled.button<Props>`
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 4.5em;

  width: 1em;
  height: 1em;
`

const BarsSVG = styled.svg`
  display: block;

  font-size: 0.425em;

  height: 1em;
  width: 1em;

  margin-bottom: -0.05em;

  z-index: ${layout.zIndex.low};

  fill: white;

  & rect {
    fill: inherit;
  }
`

export default memo(Navicon)
