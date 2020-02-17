import React, { memo } from "react"
import styled from "styled-components"
import { layout, appearance } from "@style/design-tokens"
import Mark from "@components/shared/mark/mark"
import Title from "@components/shared/title/title"
import { themeForeground } from "@style/theme"
import RemoveWidow from "@components/shared/remove-widow/remove-widow"
import { mq } from "@style/media-queries"

const Hero: React.FunctionComponent = memo(() => (
  <HeroContainer>
    <HeroInner>
      {/* Spacey rings */}
      <HeroMarkDecoration>
        <HeroMark />
        <HeroMarkRingsOuter />
        <HeroMarkRingsInner />
      </HeroMarkDecoration>

      {/* Title */}
      <h1>
        <HeroTitle size="sm" intensity="low">
          <RemoveWidow>
            A minimal way to explore Ethereum blocks inside your web browser.
          </RemoveWidow>
        </HeroTitle>
      </h1>
    </HeroInner>
  </HeroContainer>
))

const HeroContainer = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;

  height: 70vh;

  z-index: ${layout.zIndex.floor};
`

const HeroInner = styled.div``

const HeroMarkDecoration = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  width: 100%;

  font-size: 2.75rem;

  margin-bottom: ${layout.scale[8]};

  ${mq.greaterThan("topLap")`
    font-size: 3.25rem;
  `}
`

const HeroMark = styled(Mark)`
  z-index: ${layout.zIndex.low};
`

const HeroMarkRings = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: ${layout.zIndex.floor};

  font-size: 15em;

  &::after,
  &::before {
    content: "";

    position: absolute;

    top: 50%;
    left: 50%;

    width: 1em;
    height: 1em;

    margin-top: -0.5em;
    margin-left: -0.5em;

    opacity: 0.45;

    border: ${appearance.borderThickness.regular} solid
      ${themeForeground("extraLow")};

    border-radius: ${appearance.radius.circle};
  }
`

const HeroMarkRingsInner = styled(HeroMarkRings)`
  width: 500px;
  height: 500px;

  &::after {
    font-size: 0.75em;

    z-index: ${layout.zIndex.medium};
  }

  &::before {
    font-size: 0.2em;

    z-index: ${layout.zIndex.high};
  }
`

const HeroMarkRingsOuter = styled(HeroMarkRings)`
  width: 1000px;
  height: 1000px;

  &::after {
    font-size: 3em;

    z-index: ${layout.zIndex.floor};
  }

  &::before {
    font-size: 1.8em;

    z-index: ${layout.zIndex.low};
  }
`

const HeroTitle = styled(Title)`
  text-align: center;
  max-width: 20em;
`

export default Hero
