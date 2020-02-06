import React, { memo, MutableRefObject } from "react"
import { SocialMeta, Web3BlockData } from "model"
import gsap from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import MenuBlockList from "./menu-block-list/menu-block-list"
import Social from "./social/social"
import MenuNavList from "./menu-nav-list/menu-nav-list"
import { layout, type } from "@style/variables"
import styled from "styled-components"
import { themeTone } from "@style/theme"
import { mq, scaleBetween, scaleGreaterThan } from "@style/media-queries"

interface Props {
  open: boolean
  dispatchCloseMenuAction: () => void
  blockData?: Web3BlockData[] | null
}

interface DataProps {
  social: SocialMeta
}

type AllProps = Props & DataProps

export let menuIsAnimating = false

const slideInSpeed = 0.6
const slideOutSpeed = 0.3

const Menu: React.FunctionComponent<AllProps> = memo(
  ({ open, social, dispatchCloseMenuAction, blockData }) => {
    const sidebar = React.useRef() as MutableRefObject<HTMLDivElement>
    const containerRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const animationScrim = React.useRef() as MutableRefObject<HTMLDivElement>

    const handleMenuClose = () => {
      if (!menuIsAnimating) {
        dispatchCloseMenuAction()
      }
    }

    const animateOpen = () => {
      gsap.set(containerRef.current, { visibility: "visible" })
      gsap.fromTo(
        sidebar.current,
        {
          x: "100%",
        },
        {
          duration: slideInSpeed,
          ease: "expo.out",
          x: "0%",
          onComplete: () => {
            menuIsAnimating = false
          },
        }
      )
      // Scrim
      gsap.to(animationScrim.current, {
        duration: 0.4,
        opacity: 0.75,
      })
    }

    const animateClose = () => {
      gsap.fromTo(
        sidebar.current,
        {
          x: "0%",
        },
        {
          duration: slideOutSpeed,
          ease: "expo.out",
          x: "100%",
          clearProps: "transform, opacity",
          onComplete: () => {
            menuIsAnimating = false
            gsap.set(containerRef.current, { clearProps: "visibility" })
          },
        }
      )
      // Scrim
      gsap.to(animationScrim.current, {
        duration: slideOutSpeed,
        opacity: 0,
        clearProps: "opacity",
      })
    }

    useDeferredRunEffect(() => {
      menuIsAnimating = true

      open ? animateOpen() : animateClose()
    }, [open])

    return (
      <Fixer ref={containerRef}>
        <Sidebar ref={sidebar}>
          <Contents>
            <SidebarNav>
              <SidebarNavInner>
                <MenuBlockList
                  blockData={blockData}
                  onClick={handleMenuClose}
                  open={open}
                />

                <MenuNavList onClick={handleMenuClose} open={open} />
              </SidebarNavInner>
            </SidebarNav>

            <SocialContainer>
              <Social items={social} open={open} />
            </SocialContainer>
          </Contents>
        </Sidebar>

        <AnimationScrim ref={animationScrim} onClick={handleMenuClose} />
      </Fixer>
    )
  }
)

export const menuZindex = layout.zIndex.highest

const AnimationScrim = styled.div`
  background-color: ${themeTone(100)};
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: ${layout.zIndex.low};
`

const Fixer = styled.div`
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

const Sidebar = styled.div`
  position: relative;
  display: flex;

  align-items: center;

  padding-left: ${layout.scale[8]};
  padding-right: ${layout.scale[8]};
  padding-bottom: ${layout.scale[8]};

  height: 100%;

  z-index: ${layout.zIndex.high + 1};

  overflow: hidden;

  background-color: ${themeTone(100)};
  transform: translate3d(0, 0, 0);

  ${mq.lessThan("bottomPalm")`
    width: 100%;
  `}

  ${scaleBetween(
    "padding-left",
    layout.scale[8],
    layout.scale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-bottom",
    layout.scale[8],
    layout.scale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleBetween(
    "padding-right",
    layout.scale[8],
    layout.scale[9],
    "topThumb",
    "bottomUltra"
  )}

  ${scaleGreaterThan("padding-left", layout.scale[9], "topUltra")}
  ${scaleGreaterThan("padding-right", layout.scale[9], "topUltra")}
  ${scaleGreaterThan("padding-bottom", layout.scale[9], "topUltra")}
`

const Contents = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 100%;

  z-index: ${layout.zIndex.high};
`

const SidebarNav = styled.nav`
  display: flex;

  align-items: center;
  width: 100%;
  flex: 1;
`

const SidebarNavInner = styled.div`
  margin-bottom: -12.5vh;
  width: 100%;
`

const SocialContainer = styled.div`
  font-size: ${type.scale[5]};
  
  ${scaleBetween(
    "font-size",
    type.scale[5],
    type.scale[6],
    "topThumb",
    "bottomWide"
  )}

  ${scaleBetween(
    "font-size",
    type.scale[6],
    type.scale[7],
    "topWide",
    "bottomUltra"
  )}

  ${scaleGreaterThan("font-size", type.scale[7], "topUltra")}
`

export default Menu
