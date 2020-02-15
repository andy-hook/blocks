import React from "react"
import classNames from "classnames"
import ColumnsTemplate from "../columns-template/columns-template"
import styled from "styled-components"
import TruncateString from "react-truncate-string"
import { layout } from "@style/design-tokens"
import Title from "@components/shared/title/title"
import Label from "@components/shared/label/label"
import { themeTone } from "@style/theme"
import Transfer from "@components/shared/transfer/transfer"

interface Props {
  blockNumber?: string
  trxHash?: string
  from?: string
  to?: string
  value?: string
  className?: string
}

const Transaction: React.FunctionComponent<Props> = ({
  blockNumber,
  trxHash,
  from,
  to,
  value,
  className,
}) => {
  return (
    <Row className={classNames("", className)}>
      <ColumnsTemplate
        hash={
          <LimitedHash>
            <TruncateString text={trxHash} truncateAt={50} />
          </LimitedHash>
        }
        block={
          <Title size="xs">
            <TruncateString text={"# " + blockNumber} truncateAt={50} />
          </Title>
        }
        fromTo={<Transfer from={from} to={to} />}
        value={
          <Label>
            <TruncateString text={value} truncateAt={50} />
          </Label>
        }
      />
    </Row>
  )
}

export const rowPaddingX = layout.scale[8]

const LimitedHash = styled(Label)`
  max-width: ${layout.scale[16]};
`

const Row = styled.tr`
  display: flex;
  background-color: ${themeTone(500)};

  padding: ${layout.scale[8]} ${layout.scale[8]};
`

export default Transaction
