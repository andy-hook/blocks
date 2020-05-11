import React, { useState } from "react"
import Page from "@components/shared/page/page"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import Block from "@components/shared/block/block"
import styled from "styled-components"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import { Web3BlockData } from "model"
import { requestBlocks } from "@web3/web3-data-request"
import { useWeb3Context } from "@web3/web3-provider"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"
import { layout } from "@style/design-tokens"
import { mq } from "@style/media-queries"
import { useAsyncEffect } from "use-async-effect"
import { RouteComponentProps } from "@reach/router"

interface Props extends RouteComponentProps {
  path: string
  blockNumberFromUrl?: string
}

interface DataState {
  data: Web3BlockData | null
  error: {} | null
}

const BlockSingle: React.FunctionComponent<Props> = ({
  blockNumberFromUrl,
  location,
}) => {
  const web3 = useWeb3Context().web3
  const { data: blocksData } = useWeb3BlocksDataContext()
  const blockNumber = parseFloat(blockNumberFromUrl as string)
  const { setLoadingStatus } = useLoadingStatusContext()

  const [blockData, setBlockData] = useState<DataState>({
    data: null,
    error: null,
  })

  function setDataAndHideLoadingStatus(
    data: Web3BlockData,
    error: DataState["error"]
  ) {
    setBlockData({
      data: { ...data },
      error,
    })

    setLoadingStatus(false)
  }

  useAsyncEffect(
    async isMounted => {
      setLoadingStatus(true)

      if (blocksData && web3) {
        // Get the current block from context if possible
        const currentCachedBlockData = blocksData.find(
          element => element.number === blockNumber
        ) as Web3BlockData

        // Use value from context if it exists or fetch new...
        if (currentCachedBlockData) {
          setDataAndHideLoadingStatus({ ...currentCachedBlockData }, null)
        } else {
          // Clear stored data to force loading skeletons to appear
          setBlockData({ data: null, error: null })

          // Fetch fresh data
          try {
            const currentBlockData = (await requestBlocks(web3, [
              blockNumber,
            ])) as Web3BlockData[]

            // Success
            if (isMounted()) {
              setDataAndHideLoadingStatus({ ...currentBlockData[0] }, null)
            }
          } catch (error) {
            // Failure
            if (isMounted()) {
              setBlockData({ data: null, error })
            }
          }
        }
      }
    },
    [blocksData, blockNumberFromUrl]
  )

  return (
    <Page>
      <Gutter>
        <Limiter size="large">
          <BlockContainer>
            <Block blockData={blockData.data} key={location?.key} />
          </BlockContainer>
        </Limiter>
      </Gutter>
    </Page>
  )
}

const BlockContainer = styled.div`
  padding-top: ${layout.scale[12]};

  ${mq.greaterThan("topLap")`
    padding-top: ${layout.scale[14]};
  `}
`

export default BlockSingle
