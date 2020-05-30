import React from "react"
import styled, { css } from "styled-components"
import Title from "@components/title/title"
import Label from "@components/label/label"
import { layout } from "@style/design-tokens"
import BlockHeaderSwitch from "./block-header-switch/block-header-switch"
import Panel from "@components/panel/panel"
import Button from "@components/button/button"
import { mq } from "@style/media-queries"
import bkOnDarkSvg from "@svg/bk-on-dark.svg"
import tkOnDarkSvg from "@svg/tx-on-dark.svg"
import bkOnLightSvg from "@svg/bk-on-light.svg"
import tkOnLightSvg from "@svg/tx-on-light.svg"
import { isTheme } from "@style/theme"

interface Props {
  blockNumber?: string
  transactionCount?: string
  loading?: boolean
  trxVisible: boolean
  handleDetailsClick?: () => void
  handleTransactionsClick?: () => void
}

const BlockHeader: React.FunctionComponent<Props> = ({
  blockNumber,
  transactionCount,
  loading,
  handleDetailsClick,
  handleTransactionsClick,
  trxVisible,
}) => {
  function renderSupTitleContent() {
    return trxVisible ? (
      <>&#x23;&nbsp;{blockNumber}</>
    ) : (
      <>{transactionCount} Transactions</>
    )
  }

  function renderTitleContent() {
    return trxVisible ? (
      <>{transactionCount} Transactions</>
    ) : (
      <>&#x23;&nbsp;{blockNumber}</>
    )
  }

  return (
    <HeaderPanel yPadding="lg" xPadding="lg">
      <HeaderPanelInner>
        <Button to="/" buttonType="tertiary" icon="arrow-left">
          Latest blocks
        </Button>
        <Header showAsTrx={trxVisible}>
          {/* Title with details */}
          <DetailCouple>
            <SupTitle
              intensity="low"
              size="lg"
              skeletonWidth="lg"
              loading={loading}
            >
              {renderSupTitleContent()}
            </SupTitle>

            <h1>
              <Title
                intensity="high"
                size="lg"
                loading={loading}
                skeletonWidth="md"
              >
                {renderTitleContent()}
              </Title>
            </h1>
          </DetailCouple>

          {/* Switch between details and transactions */}
          <HeaderSwitch
            onDetailsClick={handleDetailsClick}
            onTransactionsClick={handleTransactionsClick}
            trxVisible={trxVisible}
            disabled={loading}
          />
        </Header>
      </HeaderPanelInner>
    </HeaderPanel>
  )
}

const HeaderPanel = styled(Panel)`
  margin-bottom: ${layout.scale[3]};

  ${mq.greaterThan("topDesk")`
    margin-bottom: ${layout.scale[5]};
  `}
`

const HeaderPanelInner = styled.div`
  margin-top: -${layout.scale[3]};
`

const blockLettering = css`
  ${isTheme(
    "dark",
    `background-image: url(${bkOnDarkSvg});`,
    `background-image: url(${bkOnLightSvg});`
  )};
`

const transactionLettering = css`
  ${isTheme(
    "dark",
    `background-image: url(${tkOnDarkSvg});`,
    `background-image: url(${tkOnLightSvg});`
  )};
`

const Header = styled.header<{ showAsTrx: boolean }>`
  position: relative;
  z-index: ${layout.zIndex.low};

  margin-top: ${layout.scale[8]};
  padding-left: 5%;
  padding-top: ${layout.scale[11]};

  ${mq.greaterThan("topLap")`
    display: flex;

    align-items: flex-end;
    justify-content: space-between;
    padding-left: 13%;
    padding-top: ${layout.scale[13]};
  `}

  &::after {
    content: "";

    ${props => (props.showAsTrx ? transactionLettering : blockLettering)}

    background-size: contain;
    background-repeat: no-repeat;
    background-position: left top;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: ${layout.zIndex.floor};

    opacity: 0.03;
  }
`

const SupTitle = styled(Label)`
  margin-bottom: ${layout.scale[4]};
`

const DetailCouple = styled.div`
  position: relative;

  padding-bottom: ${layout.scale[6]};

  z-index: ${layout.zIndex.low};

  ${mq.lessThan("bottomLap")`
    margin-bottom: ${layout.scale[2]}
  `}

  ${mq.greaterThan("topDesk")`
    width: 50%;
  `}
`

const HeaderSwitch = styled(BlockHeaderSwitch)`
  position: relative;
  z-index: ${layout.zIndex.low};
`

export default BlockHeader
