import React, { memo } from "react"
import styled from "styled-components"
import Icon from "@components/shared/icon/icon"
import { themeForeground, themeForegroundAlpha } from "@style/theme"
import classNames from "classnames"
import { appearance } from "@style/design-tokens"

interface Props {
  className?: string
}

const Mark: React.FunctionComponent<Props> = memo(({ className }) => (
  <MarkContainer className={classNames("", className)}>
    <MarkIcon name="blocks" />
  </MarkContainer>
))

const MarkContainer = styled.div`
  font-size: 1em;
  padding: 0.44em;

  border-radius: ${appearance.radius.circle};

  border: ${appearance.borderThickness.thick} solid ${themeForeground("low")};

  background: linear-gradient(
    135deg,
    ${themeForegroundAlpha("extraLow", 1)} 0%,
    ${themeForegroundAlpha("extraLow", 0)} 75%
  );
`

const MarkIcon = styled(Icon)`
  font-size: 1em;
  color: ${themeForeground("extraHigh")};
`

export default Mark
