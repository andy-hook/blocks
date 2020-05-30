import SEO from "@components/seo"
import { Router, RouteComponentProps } from "@reach/router"
import React, { useState, useEffect, useCallback, useMemo } from "react"
import Page from "@components/page/page"
import Gutter from "@components/gutter/gutter"
import Limiter from "@components/limiter/limiter"
import Block from "@components/block/block"
import styled from "styled-components"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import { Web3BlockData } from "model"
import { requestBlocks } from "@web3/web3-data-request"
import { useWeb3Context } from "@web3/web3-provider"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"
import { layout } from "@style/design-tokens"
import { mq } from "@style/media-queries"

interface Props extends RouteComponentProps {
  path: string
  blockNumberFromUrl?: string
}

interface DataState {
  data: Web3BlockData | null
  error: string | null
}

const BlockSingle: React.FunctionComponent<Props> = ({
  blockNumberFromUrl,
  location,
}) => {
  const web3 = useWeb3Context().web3
  const { data: blocksData } = useWeb3BlocksDataContext()
  const { setLoadingStatus } = useLoadingStatusContext()
  const blockNumber = useMemo(() => parseFloat(blockNumberFromUrl as string), [
    blockNumberFromUrl,
  ])

  const [blockData, setBlockData] = useState<DataState>({
    data: null,
    error: null,
  })

  const setDataAndHideLoadingStatus = useCallback(
    (data: Web3BlockData, error: DataState["error"]) => {
      setBlockData({
        data: { ...data },
        error,
      })

      setLoadingStatus(false)
    },
    [setLoadingStatus]
  )

  useEffect(() => {
    setLoadingStatus(true)
  }, [setLoadingStatus, blockNumber])

  useEffect(() => {
    let cancelled = false
    async function getBlocksState() {
      if (blocksData && web3) {
        // Get the current block from context if possible
        const currentCachedBlockData = blocksData.find(
          block => block.number === blockNumber
        ) as Web3BlockData

        // Use value from context if it exists or fetch new...
        if (currentCachedBlockData) {
          if (!cancelled) {
            setDataAndHideLoadingStatus({ ...currentCachedBlockData }, null)
          }
        } else {
          // Clear stored data to force loading skeletons to appear
          if (!cancelled) {
            setBlockData({ data: null, error: null })
          }

          // Fetch fresh data
          try {
            const currentBlockData = (await requestBlocks(web3, [
              blockNumber,
            ])) as Web3BlockData[]

            // Success
            if (!cancelled) {
              setDataAndHideLoadingStatus({ ...currentBlockData[0] }, null)
            }
          } catch (error) {
            const errorMessage = (error as Error).message

            // Failure
            if (!cancelled) {
              setBlockData({ data: null, error: errorMessage })
            }
          }
        }
      }
    }

    void getBlocksState()

    return () => {
      cancelled = true
    }
  }, [
    blocksData,
    blockNumberFromUrl,
    blockNumber,
    setLoadingStatus,
    setDataAndHideLoadingStatus,
    web3,
  ])

  return (
    <Page>
      <Gutter>
        <Limiter size="large">
          <BlockContainer>
            <Block blockData={blockData.data} key={location && location.key} />
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

const BlockPage: React.FunctionComponent = () => {
  return (
    <>
      <SEO />

      <Router>
        <BlockSingle path="/block/:blockNumberFromUrl" />
      </Router>
    </>
  )
}

export default BlockPage
