import React, { memo } from "react"
import styled, { css } from "styled-components"
import Title from "@components/shared/title/title"
import Label from "@components/shared/label/label"
import { layout } from "@style/design-tokens"
import BlockHeaderSwitch from "./block-header-switch/block-header-switch"
import Panel from "@components/shared/panel/panel"
import Button from "@components/shared/button/button"
import { mq } from "@style/media-queries"

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
  margin-bottom: ${layout.scale[6]};

  ${mq.greaterThan("topLap")`
    margin-bottom: ${layout.scale[8]};
  `}
`

const blockLettering = css`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='356' height='210' viewBox='0 0 356 210'%3E%3Cpath fill='white' d='M227.42,210V144.3L243,123.6h.6L307,210h49L271,92.7,349.69,0H302.52L228,88.2h-.6V0H186.86V210ZM89.53,172.5h-49V117.6H89.83q13.22,0,20.88,7.05t7.66,19.95Q118.37,172.5,89.53,172.5ZM84.12,84.6H40.56V37.5H84.12q26.43,0,26.44,24,0,11.4-6.91,17.25T84.12,84.6ZM80.21,210q42.06,0,60.39-17.4,18.32-18,18.32-48,0-16.8-8.41-29.55A48.13,48.13,0,0,0,128.28,96.6v-.3q22.83-13.5,22.83-39.9,0-23.7-17.12-39.9Q117.46,0,89.23,0H0V210Z'/%3E%3C/svg%3E");
`

const transactionLettering = css`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='357' height='210' viewBox='0 0 357 210'%3E%3Cpath fill='white' d='M225.15,210.23l43.31-80.79h.6l42.12,80.79h46L296,104.81,356.59,0H312.08L273.84,72.38h-.6L235.6,0h-46l56.46,97L180.63,210.23Zm-123.28,0V37.54h61.41V0H0V37.54H61.42V210.23Z' /%3E%3C/svg%3E");
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
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  padding-bottom: ${layout.scale[6]};

  z-index: ${layout.zIndex.low};
`

const SupTitle = styled(Label)`
  margin-bottom: ${layout.scale[4]};
`

const DetailCouple = styled.div`
  width: 50%;
  padding-top: ${layout.scale[11]};
  padding-left: 5%;

  ${mq.greaterThan("topLap")`
    padding-left: 13%;
    padding-top: ${layout.scale[13]};
  `}
`

export default BlockHeader
