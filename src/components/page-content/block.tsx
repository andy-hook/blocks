import styled from "styled-components"
import React, { memo, useEffect, useState } from "react"
import { useWeb3BlocksDataContext } from "@web3/web3-blocks-data-provider"
import { Web3BlockData } from "model"
import { requestBlocks } from "@web3/web3-data-request"
import { useWeb3Context } from "@web3/web3-provider"
import Page from "@components/shared/page/page"

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
      <Container>
        Hello from block #{blockNumberFromUrl} <br />{" "}
        {blockData.data && blockData.data.transactionCount}
      </Container>
    </Page>
  )
})

export default Block

const Container = styled.div`
  color: red;
  padding-top: 300px;
  height: 2000px;
`
