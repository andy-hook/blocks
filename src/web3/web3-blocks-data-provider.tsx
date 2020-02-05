import React, { createContext, useState, useEffect, useContext } from "react"
import { Web3BlockData } from "model"
import { useWeb3Context } from "./web3-provider"
import { lastNumbersFromRange } from "@utils"
import { requestBlocks } from "./web3-data-request"

interface Props {
  maxBlocks?: number
}

interface DataState {
  data: Web3BlockData[] | null
  error: {} | null
}

export const Web3BlocksData = createContext<Partial<DataState>>({})

export const Web3BlocksDataProvider: React.FunctionComponent<Props> = ({
  children,
  maxBlocks = 10,
}) => {
  const web3 = useWeb3Context().web3
  const [blocksState, setBlocksState] = useState<DataState>({
    data: null,
    error: null,
  })

  async function fetchAllData() {
    const latestBlockNumber = await web3.eth.getBlockNumber()

    const blocksToRequest = lastNumbersFromRange({
      start: latestBlockNumber - maxBlocks,
      size: maxBlocks,
    })

    try {
      const allBlocksData = (await requestBlocks(
        web3,
        blocksToRequest
      )) as Web3BlockData[]

      // Success
      setBlocksState({ data: allBlocksData, error: null })
    } catch (error) {
      // Failure
      setBlocksState({ data: null, error })
    }
  }

  useEffect(() => {
    // Request only once
    if (web3 && !blocksState.data) {
      fetchAllData()
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
