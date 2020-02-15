import React, { memo } from "react"
import classNames from "classnames"
import ColumnsTemplate from "../columns-template/columns-template"
import styled, { css } from "styled-components"
import TruncateString from "react-truncate-string"
import { layout } from "@style/design-tokens"
import Title from "@components/shared/title/title"
import Label from "@components/shared/label/label"
import { themeTone } from "@style/theme"
import Transfer from "@components/shared/transfer/transfer"
import { mq } from "@style/media-queries"

interface Props {
  blockNumber?: string
  trxHash?: string
  from?: string
  to?: string
  value?: string
  className?: string
}

const Transaction: React.FunctionComponent<Props> = memo(
  ({ blockNumber, trxHash, from, to, value, className }) => {
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
              <TruncateString text={value} truncateAt={20} />
            </Label>
          }
        />
      </Row>
    )
  }
)

export const rowPaddingX = css`
  padding-left: ${layout.scale[7]};
  padding-right: ${layout.scale[7]};

  ${mq.greaterThan("topLap")`
    padding-left: ${layout.scale[8]};
    padding-right: ${layout.scale[8]};
  `}

  ${mq.greaterThan("topDesk")`
    padding-left: ${layout.scale[9]};
    padding-right: ${layout.scale[9]};
  `}

  ${mq.greaterThan("topWide")`
    padding-left: ${layout.scale[10]};
    padding-right: ${layout.scale[10]};
  `}
`

const LimitedHash = styled(Label)`
  max-width: ${layout.scale[16]};
`

const Row = styled.tr`
  ${rowPaddingX}

  display: flex;
  background-color: ${themeTone(500)};

  padding-top: ${layout.scale[6]};
  padding-bottom: ${layout.scale[6]};

  ${mq.greaterThan("topDesk")`
    padding-top: ${layout.scale[7]};
    padding-bottom: ${layout.scale[7]};
  `}
`

export default Transaction
