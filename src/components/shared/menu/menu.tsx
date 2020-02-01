import React, { memo, MutableRefObject } from "react"
import { SocialMeta } from "model"
import gsap from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import ProjectListComponent from "./project-list/project-list"
import * as S from "./menu.style"
import Social from "./social/social"
import MenuNavList from "./menu-nav-list/menu-nav-list"

interface Props {
  open: boolean
  dispatchCloseMenuAction: () => void
}

interface DataProps {
  social: SocialMeta
}

type AllProps = Props & DataProps

export let menuIsAnimating = false

const slideInSpeed = 0.6
const slideOutSpeed = 0.3

const Menu: React.FunctionComponent<AllProps> = memo(
  ({ open, social, dispatchCloseMenuAction }) => {
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
      <S.Fixer ref={containerRef}>
        <S.Sidebar ref={sidebar}>
          <S.Contents>
            <S.SidebarNav>
              <S.SidebarNavInner>
                <ProjectListComponent
                  onClick={handleMenuClose}
                  open={open}
                />

                <MenuNavList onClick={handleMenuClose} open={open} />
              </S.SidebarNavInner>
            </S.SidebarNav>

            <S.SocialContainer>
              <Social items={social} open={open} />
            </S.SocialContainer>
          </S.Contents>
        </S.Sidebar>

        <S.AnimationScrim ref={animationScrim} onClick={handleMenuClose} />
      </S.Fixer>
    )
  }
)

export default Menu
