import React from "react"
import classNames from "classnames"
import ColumnsTemplate from "../columns-template/columns-template"
import styled, { css } from "styled-components"
import TruncateString from "react-truncate-string"
import { layout, appearance } from "@style/design-tokens"
import Title from "@components/title/title"
import Label from "@components/label/label"
import Transfer from "@components/transfer/transfer"
import { mq } from "@style/media-queries"
import { mimicPanelSizeAndPresentation } from "@components/panel/panel"
import { themeBrand } from "@style/theme"

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
    <Row
      className={classNames("", className)}
      hasValue={value ? value !== "0" : false}
    >
      <ColumnsTemplate
        block={
          <Title size="xs" intensity="high">
            <TruncateString
              text={blockNumber && `# ${blockNumber}`}
              truncateAt={50}
            />
          </Title>
        }
        hash={
          <LimitedHash>
            <TruncateString text={trxHash} truncateAt={50} />
          </LimitedHash>
        }
        fromTo={<Transfer from={from} to={to} />}
        value={
          <Label>
            <TruncateString
              text={`${value ? value : ""} Eth`}
              truncateAt={20}
            />
          </Label>
        }
      />
    </Row>
  )
}

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

const Row = styled.tr<{ hasValue: boolean }>`
  ${mimicPanelSizeAndPresentation({ xSize: "lg", ySize: "sm" })}

  position: relative;
  overflow: hidden;

  display: flex;

  &::after {
    content: "";

    background: linear-gradient(
      to bottom,
      ${themeBrand("light")} 0%,
      ${themeBrand()} 100%
    );

    position: absolute;

    left: 0;
    top: 0;

    height: 100%;

    width: ${appearance.borderThickness.thickest};

    opacity: ${props => (props.hasValue ? 1 : 0.15)};
  }
`

export default Transaction
