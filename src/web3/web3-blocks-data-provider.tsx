import React, { createContext, useState, useEffect, useContext } from "react"
import { Web3BlockData, Web3TransactionData } from "model"
import { useWeb3Context } from "./web3-provider"
import { lastNumbersFromRange } from "@utils"
import { requestBlocks } from "./web3-data-request"

interface Props {
  maxBlocks?: number
}

interface DataState {
  data: Web3BlockData[] | null
  loading: boolean
  error: {} | null
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

  useEffect(() => {
    const fetchAllData = async () => {
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

        console.log(allBlocksData)

        // Success
        setBlocksState({ data: allBlocksData, loading: false, error: null })
      } catch (error) {
        // Failure
        setBlocksState({ data: null, loading: false, error })
      }
    }

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