import React, { memo, MutableRefObject } from "react"
import { SocialMeta } from "@custom-types/model"
import { keys } from "@utils"
import Icon from "@components/shared/icon/icon"
import gsap from "gsap"
import useDeferredRunEffect from "@hooks/deferred-run"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { themeText, isTheme } from "@style/theme"
import { animation, appearance } from "@style/design-tokens"

interface Props {
  items: SocialMeta
  open: boolean
}

type Refs<T> = Array<MutableRefObject<T>>

const Social: React.FunctionComponent<Props> = memo(({ items, open }) => {
  const projectKeys = keys(items)
  const refs = projectKeys.map(React.createRef) as Refs<HTMLLIElement>
  const cachedRefs = React.useRef<Refs<HTMLLIElement>>(refs)
  const listRef = React.useRef() as MutableRefObject<HTMLUListElement>

  const animateOpen = () => {
    gsap.fromTo(
      listRef.current,
      {
        y: `${150}%`,
      },
      {
        duration: 1,
        ease: "expo.out",
        delay: 0.4,
        y: "0%",
        clearProps: "transform",
        overwrite: true,
      }
    )

    cachedRefs.current.map((listItem, index) => {
      gsap.fromTo(
        listItem.current,
        {
          y: `${20 + index * 10}%`,
          opacity: 0,
        },
        {
          duration: 1,
          ease: "expo.out",
          delay: 0.4 + index * 0.025,
          opacity: 1,
          y: "0%",
          clearProps: "transform",
          overwrite: true,
        }
      )
    })
  }

  const animateClosed = () => {
    cachedRefs.current.map(listItem => {
      gsap.to(listItem.current, {
        duration: 0.25,
        opacity: 0,
        clearProps: "opacity",
        overwrite: true,
      })
    })
  }

  useDeferredRunEffect(() => {
    open ? animateOpen() : animateClosed()
  }, [open])

  const icons = keys(items).map((key, index) => {
    const ref = cachedRefs.current[index]

    return (
      <SocialItem key={key} ref={ref}>
        <Link
          aria-label={items[key].label}
          target={items[key].url.includes("mailto:") ? "" : "_blank"}
          href={items[key].url}
        >
          <IconPos>
            <Icon name={items[key].icon} />
          </IconPos>
        </Link>
      </SocialItem>
    )
  })

  return <SocialList ref={listRef}>{icons}</SocialList>
})

const padding = "0.7em"

const SocialList = styled.ul`
  display: flex;

  font-size: 1em;

  margin: -${padding};
`

const SocialItem = styled.li`
  opacity: 0;
`

const Link = styled(OutboundLink)`
  position: relative;
  display: block;
  color: ${themeText(100)};

  padding: ${padding};

  &::after {
    transition: transform ${animation.duration.slow}
        ${animation.ease("subtleBounce")},
      opacity ${animation.duration.fast} linear;

    content: "";
    position: absolute;

    top: 0.1em;
    left: 0.1em;
    right: 0.1em;
    bottom: 0.1em;
    border: ${appearance.borderThickness.regular} solid ${themeText(100)};

    border-radius: ${appearance.radius.circle};

    opacity: 0;

    transform: scale(1.5);

    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  &:hover::after,
  &:focus::after {
    opacity: 0.15;
    transform: scale(1);
  }
`
const IconPos = styled.div`
  transition: opacity ${animation.duration.slow}
    ${animation.ease("subtleBounce")};
  opacity: ${isTheme("dark", "0.25", "0.4")};

  ${Link}:hover &,
  ${Link}:focus & {
    opacity: 1;
  }
`

export default Social
