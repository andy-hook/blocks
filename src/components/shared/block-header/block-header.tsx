import React, { memo } from "react"
import styled, { css } from "styled-components"
import Title from "@components/shared/title/title"
import Label from "@components/shared/label/label"
import { layout } from "@style/design-tokens"
import BlockHeaderSwitch from "./block-header-switch/block-header-switch"
import Panel from "@components/shared/panel/panel"
import Button from "@components/shared/button/button"
import { mq } from "@style/media-queries"
import bkOnDarkSvg from "@svg/bk-on-dark.svg"
import tkOnDarkSvg from "@svg/tx-on-dark.svg"

interface Props {
  blockNumber?: string
  transactionCount?: string
  loading?: boolean
  trxVisible: boolean
  handleDetailsClick?: () => void
  handleTransactionsClick?: () => void
}

const BlockHeader: React.FunctionComponent<Props> = memo(
  ({
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
        <Button to="/" buttonType="tertiary" icon="arrow-left">
          All Blocks
        </Button>
        <Header showAsTrx={trxVisible}>
          <HeaderInner>
            <DetailCouple>
              <SupTitle intensity="low" size="lg" loading={loading}>
                {renderSupTitleContent()}
              </SupTitle>
              <Title
                intensity="high"
                size="lg"
                loading={loading}
                skeletonWidth="sm"
              >
                {renderTitleContent()}
              </Title>
            </DetailCouple>

            <BlockHeaderSwitch
              onDetailsClock={handleDetailsClick}
              onTransactionsClick={handleTransactionsClick}
            />
          </HeaderInner>
        </Header>
      </HeaderPanel>
    )
  }
)

const HeaderPanel = styled(Panel)`
  margin-bottom: ${layout.scale[3]};

  ${mq.greaterThan("topDesk")`
    margin-bottom: ${layout.scale[5]};
  `}
`

const blockLettering = css`
  background-image: url(${bkOnDarkSvg});
`

const transactionLettering = css`
  background-image: url(${tkOnDarkSvg});
`

const Header = styled.header<{ showAsTrx: boolean }>`
  position: relative;

  margin-top: ${layout.scale[8]};

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

    opacity: 0.025;
  }
`

const HeaderInner = styled.div`
  position: relative;

  padding-bottom: ${layout.scale[6]};

  z-index: ${layout.zIndex.low};

  padding-left: 5%;
  padding-top: ${layout.scale[11]};

  ${mq.greaterThan("topLap")`
    display: flex;

    align-items: flex-end;
    justify-content: space-between;
    padding-left: 13%;
    padding-top: ${layout.scale[13]};
  `}
`

const SupTitle = styled(Label)`
  margin-bottom: ${layout.scale[4]};
`

const DetailCouple = styled.div`
  width: 50%;

  ${mq.lessThan("bottomLap")`
    margin-bottom: ${layout.scale[5]}
  `}
`

export default BlockHeader
