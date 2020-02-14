import React, { memo, useEffect, useState } from "react"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import { Web3BlockData } from "model"
import { requestBlocks } from "@web3/web3-data-request"
import { useWeb3Context } from "@web3/web3-provider"
import Page from "@components/shared/page/page"
import Gutter from "@components/shared/gutter/gutter"
import Limiter from "@components/shared/limiter/limiter"
import BlockSingle from "@components/shared/block-single/block-single"

interface Props {
  path: string
  blockNumberFromUrl?: string
}

interface DataState {
  data: Web3BlockData | null
  error: {} | null
}

const Block: React.FunctionComponent<Props> = memo(({ blockNumberFromUrl }) => {
  const web3 = useWeb3Context().web3
  const { data: blocksData } = useWeb3BlocksDataContext()
  const blockNumber = parseFloat(blockNumberFromUrl as string)

  const [blockData, setBlockData] = useState<DataState>({
    data: null,
    error: null,
  })

  async function fetchFreshBlockData() {
    try {
      const currentBlockData = (await requestBlocks(web3, [
        blockNumber,
      ])) as Web3BlockData[]

      // Success
      setBlockData({
        data: { ...currentBlockData[0] },
        error: null,
      })
    } catch (error) {
      // Failure
      setBlockData({ data: null, error })
    }
  }

  useEffect(() => {
    if (blocksData) {
      // Get the current block from context if possible
      const currentCachedBlockData = blocksData.find(
        element => element.number === blockNumber
      ) as Web3BlockData

      // Use value from context if it exists...
      currentCachedBlockData
        ? setBlockData({
            data: { ...currentCachedBlockData },
            error: null,
          })
        : // Or fetch new data for the view
          fetchFreshBlockData()
    }
  }, [blocksData])

  return (
    <Page>
      <Gutter>
        <Limiter size="large">
          <BlockSingle blockData={blockData.data} />
        </Limiter>
      </Gutter>
    </Page>
  )
})

export default Block
