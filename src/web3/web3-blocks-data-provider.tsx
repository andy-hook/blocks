import React, { createContext, useState, useContext } from "react"
import { Web3BlockData } from "model"
import { useWeb3Context } from "./web3-provider"
import { lastNumbersFromRange } from "@utils"
import { requestBlocks } from "./web3-data-request"
import { useAsyncEffect } from "use-async-effect"

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
  const { web3 } = useWeb3Context()
  const [blocksState, setBlocksState] = useState<DataState>({
    data: null,
    error: null,
  })

  useAsyncEffect(
    async isMounted => {
      if (web3 && !blocksState.data) {
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
          if (isMounted()) {
            setBlocksState({ data: allBlocksData, error: null })
          }
        } catch (error) {
          // Failure
          if (isMounted()) {
            setBlocksState({
              data: null,
              error,
            })
          }
        }
      }
    },
    [web3]
  )

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
