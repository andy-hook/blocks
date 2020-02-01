import styled from "styled-components"
import { themeText, isTheme } from "@style/theme"
import {
  borderRadius,
  easing,
  duration,
  borderThickness,
} from "@style/variables"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const padding = "0.7em"

export const SocialList = styled.ul`
  display: flex;

  font-size: 1em;

  margin: -${padding};
`

export const SocialItem = styled.li`
  opacity: 0;
`

export const Link = styled(OutboundLink)`
  position: relative;
  display: block;
  color: ${themeText(100)};

  padding: ${padding};

  &::after {
    transition: transform ${duration.slow} ${easing("subtleBounce")},
      opacity ${duration.fast} linear;

    content: "";
    position: absolute;

    top: 0.1em;
    left: 0.1em;
    right: 0.1em;
    bottom: 0.1em;
    border: ${borderThickness.regular} solid ${themeText(100)};

    border-radius: ${borderRadius.circle};

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
export const IconPos = styled.div`
  transition: opacity ${duration.slow} ${easing("subtleBounce")};
  opacity: ${isTheme("dark", "0.25", "0.4")};

  ${Link}:hover &,
  ${Link}:focus & {
    opacity: 1;
  }
`
