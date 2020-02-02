import React, { createContext, useState, useEffect, useContext } from "react"
import { Web3BlockData } from "model"
import { useWeb3Context } from "../web3-provider/web3-provider"
import { lastNumbersFromRange } from "@utils"

interface Props {
  maxBlocks?: number
}

interface DataState {
  data: Web3BlockData[] | null
  loading: boolean
  error: null
}

export const Web3BlocksData = createContext<Partial<DataState>>({})

export const Web3BlocksDataProvider: React.FunctionComponent<Props> = ({
  children,
  maxBlocks = 10,
}) => {
  const context = useWeb3Context()
  const web3 = context.web3
  const [blocksState, setBlocksState] = useState<DataState>({
    data: null,
    loading: true,
    error: null,
  })

  const requestBlocks = (blocks: number[]) => {
    const batchRequest = new web3.eth.BatchRequest()

    const batchPromise = blocks.map(block => {
      return new Promise((resolve, reject) => {
        batchRequest.add(
          web3.eth.getBlock.request(block, (error: any, data: []) => {
            error ? reject(error) : resolve(data)
          })
        )
      })
    })

    batchRequest.execute()
    return Promise.all(batchPromise)
  }

  useEffect(() => {
    const fetch = async () => {
      const latestBlockNumber = await web3.eth.getBlockNumber()

      const blocksToRequest = lastNumbersFromRange({
        start: latestBlockNumber - maxBlocks,
        size: maxBlocks,
      })

      try {
        const allBlocksData = (await requestBlocks(
          blocksToRequest
        )) as Web3BlockData[]

        // Success
        setBlocksState({ data: allBlocksData, loading: false, error: null })
      } catch (error) {
        // Failure
        setBlocksState({ data: null, loading: false, error })
      }
    }

    // Make sure to only request the blocks once per app bootstrap
    if (web3 && !blocksState.data) {
      fetch()
    }
  }, [web3])

  return (
    <Web3BlocksData.Provider value={blocksState}>
      {children}
    </Web3BlocksData.Provider>
  )
}

export default Web3BlocksDataProvider

export function useWeb3BlocksDataContext() {
  return useContext(Web3BlocksData)
}
