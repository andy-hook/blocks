import React from "react"
import styled from "styled-components"
import Icon from "@components/shared/icon/icon"
import { themeForeground, themeForegroundAlpha, isTheme } from "@style/theme"
import classNames from "classnames"
import { appearance } from "@style/design-tokens"
import { rgba } from "polished"

interface Props {
  className?: string
}

const Mark: React.FunctionComponent<Props> = ({ className }) => (
  <MarkContainer className={classNames("", className)}>
    <MarkIcon name="blocks" />
  </MarkContainer>
)

const MarkContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  font-size: 1em;

  width: 1.95em;
  height: 1.95em;

  border-radius: ${appearance.radius.circle};

  border: ${appearance.borderThickness.thick} solid
    ${isTheme("dark", themeForeground("low"), themeForeground("low"))};

  background: linear-gradient(
    135deg,
    ${isTheme("dark", themeForegroundAlpha("extraLow", 1), rgba("white", 1))} 0%,
    ${isTheme("dark", themeForegroundAlpha("extraLow", 0), rgba("white", 0))}
      75%
  );
`

const MarkIcon = styled(Icon)`
  font-size: 1em;
  color: ${themeForeground("extraHigh")};
`

export default Mark
