import React from "react"
import Gutter from "../gutter/gutter"
import Limiter from "../limiter/limiter"
import styled, { css } from "styled-components"
import {
  themeLayer,
  themeBrand,
  themeForeground,
  isTheme,
  isLightTheme,
} from "@style/theme"
import Mark from "@components/shared/mark/mark"
import Title from "@components/shared/title/title"
import { layout, appearance } from "@style/design-tokens"
import Label from "@components/shared/label/label"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { mq } from "@style/media-queries"

const Footer: React.FunctionComponent = () => (
  <FooterContainer>
    <Gutter>
      <Limiter size="large">
        <FooterInner>
          <div>
            {/* Sup line */}
            <FooterLabelContainer>
              <Label intensity="low" size="lg">
                Let’s build something awesome together
              </Label>
            </FooterLabelContainer>

            {/* Title */}
            <FooterMarkWithTitle>
              <FooterMark />

              <Title intensity="high" size="lg">
                Start by{" "}
                <FooterMailto href="mailto:hello@andy-hook.co.uk">
                  saying hello
                </FooterMailto>
              </Title>
            </FooterMarkWithTitle>

            {/* Social */}
            <FooterSocial>
              <FooterSocialList>
                <FooterSocialItem href="https://www.instagram.com/andyhooky/">
                  Instagram
                </FooterSocialItem>

                <FooterSocialItem href="https://twitter.com/andy_hook">
                  Twitter
                </FooterSocialItem>

                <FooterSocialItem href="https://dribbble.com/andyhook">
                  Dribbble
                </FooterSocialItem>

                <FooterSocialItem href="https://github.com/andy-hook">
                  Github
                </FooterSocialItem>

                <FooterSocialItem href="https://www.linkedin.com/in/andyahook">
                  Linkedin
                </FooterSocialItem>
              </FooterSocialList>
            </FooterSocial>
          </div>
        </FooterInner>
      </Limiter>
    </Gutter>
  </FooterContainer>
)

const FooterSocialItem: React.FunctionComponent<{
  href: string
  children: string
}> = ({ href, children }) => (
  <FooterSocialListItem>
    <Label intensity="low">
      <FooterSocialLink rel="noreferrer" href={href} target="_blank">
        {children}
      </FooterSocialLink>
    </Label>
  </FooterSocialListItem>
)

const FooterContainer = styled.footer`
  padding-top: ${layout.scale[13]};
  padding-bottom: ${layout.scale[13]};

  background-color: ${isTheme("dark", themeLayer("low"), themeLayer("low"))};

  ${isLightTheme(
    css`
      border-top: ${appearance.borderThickness.regular} solid
        ${themeForeground("low")};
    `
  )}

  ${mq.greaterThan("topWide")`
    padding-top: ${layout.scale[14]};
    padding-bottom: ${layout.scale[14]};
  `};
`

const FooterInner = styled.div`
  ${mq.lessThan("bottomDesk")`
    display: flex;
    justify-content: center;
  `}
`

const MarkOffset = css`
  ${mq.greaterThan("topDesk")`
    padding-left: ${layout.scale[13]};
  `}
`

const FooterLabelContainer = styled.div`
  ${MarkOffset}

  margin-bottom: ${layout.scale[4]};

  ${mq.lessThan("bottomDesk")`
    text-align: center;
  `}
`

const FooterMarkWithTitle = styled.div`
  ${MarkOffset}

  position: relative;

  padding-top: ${layout.scale[4]};
  padding-bottom: ${layout.scale[4]};

  ${mq.lessThan("bottomDesk")`
    text-align: center;
  `}
`

const FooterMark = styled(Mark)`
  position: absolute;

  top: 50%;
  left: 0;

  transform: translateY(-50%);

  font-size: ${layout.scale[8]};

  ${mq.lessThan("bottomDesk")`
    display: none;
  `}
`

const FooterMailto = styled.a`
  background: linear-gradient(
    135deg,
    ${themeBrand("light")} 0%,
    ${themeBrand()} 75%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: none;
`

const FooterSocial = styled.div`
  ${MarkOffset}

  padding-top: ${layout.scale[8]};

  ${mq.greaterThan("topDesk")`
    padding-top: ${layout.scale[10]};
  `}

  ${mq.greaterThan("topWide")`
    padding-top: ${layout.scale[11]};
  `}
`

const FooterSocialList = styled.ul`
  display: flex;

  margin: -${layout.scale[3]};

  ${mq.lessThan("bottomPalm")`
    flex-direction: column;
    justify-content: center;
  `}

  ${mq.greaterThan("topPalm")`
    margin: -${layout.scale[5]};
  `}

  ${mq.lessThan("bottomDesk")`
    justify-content: center;
  `}
`

const FooterSocialListItem = styled.li``

const FooterSocialLink = styled(OutboundLink)`
  display: block;
  padding: ${layout.scale[3]};
  text-align: center;

  ${mq.greaterThan("topPalm")`
    padding: ${layout.scale[5]};
  `}

  &:hover {
    color: ${themeForeground("extraHigh")};
  }
`

export default Footer
