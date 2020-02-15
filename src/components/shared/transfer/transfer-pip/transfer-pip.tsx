import React from "react"
import styled from "styled-components"
import classNames from "classnames"
import TruncateString from "react-truncate-string"
import { appearance, layout } from "@style/design-tokens"
import Label from "@components/shared/label/label"
import { themeTone } from "@style/theme"

interface Props {
  className?: string
  children?: string
}

const TransferPip: React.FunctionComponent<Props> = ({
  className,
  children,
}) => {
  return (
    <Container className={classNames("", className)}>
      <Label size="sm">
        <TruncateString text={children} truncateAt={40} />
      </Label>
    </Container>
  )
}

const Container = styled.div`
  padding-top: ${layout.scale[2]};
  padding-bottom: ${layout.scale[2]};
  text-align: center;
  border-radius: ${appearance.radius.pill};
  background-color: ${themeTone(900)};
`

export default TransferPip
