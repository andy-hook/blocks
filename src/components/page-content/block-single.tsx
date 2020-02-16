import React, { memo, useEffect, useState } from "react"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import { Web3BlockData } from "model"
import { requestBlocks } from "@web3/web3-data-request"
import { useWeb3Context } from "@web3/web3-provider"
import Page from "@components/shared/page/page"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import Block from "@components/shared/block/block"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"

interface Props {
  path: string
  blockNumberFromUrl?: string
}

interface DataState {
  data: Web3BlockData | null
  error: {} | null
}

const BlockSingle: React.FunctionComponent<Props> = memo(
  ({ blockNumberFromUrl }) => {
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

    async function fetchFreshBlockData() {
      try {
        const currentBlockData = (await requestBlocks(web3, [
          blockNumber,
        ])) as Web3BlockData[]

        // Success
        setDataAndHideLoadingStatus({ ...currentBlockData[0] }, null)
      } catch (error) {
        // Failure
        setBlockData({ data: null, error })
      }
    }

    useEffect(() => {
      setLoadingStatus(true)

      if (blocksData) {
        // Get the current block from context if possible
        const currentCachedBlockData = blocksData.find(
          element => element.number === blockNumber
        ) as Web3BlockData

        // Use value from context if it exists or fetch new...
        currentCachedBlockData
          ? setDataAndHideLoadingStatus({ ...currentCachedBlockData }, null)
          : // Or fetch new data for the view
            fetchFreshBlockData()
      }
    }, [blocksData])

    return (
      <Page>
        <Gutter>
          <Limiter size="large">
            <Block blockData={blockData.data} />
          </Limiter>
        </Gutter>
      </Page>
    )
  }
)

export default BlockSingle
