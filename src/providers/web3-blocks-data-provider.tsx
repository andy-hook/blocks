import React, { createContext, useState, useContext, useEffect } from "react"
import { Web3BlockData } from "model"
import { useWeb3Context } from "./web3-provider"
import { lastNumbersFromRange } from "@utils"
import { requestBlocks } from "@web3/web3-data-request"

interface Props {
  maxBlocks?: number
}

interface DataState {
  data: Web3BlockData[] | null
  error: string | null
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

  useEffect(() => {
    let cancelled = false

    async function getBlocksState() {
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
          if (!cancelled) {
            setBlocksState({ data: allBlocksData, error: null })
          }
        } catch (error) {
          const errorMessage = (error as Error).message

          // Failure
          if (!cancelled) {
            setBlocksState({
              data: null,
              error: errorMessage,
            })
          }
        }
      }
    }

    void getBlocksState()

    return () => {
      cancelled = true
    }
  }, [web3, blocksState.data, maxBlocks])

  return (
    <Web3BlocksData.Provider value={blocksState}>
      {children}
    </Web3BlocksData.Provider>
  )
}

export default Web3BlocksDataProvider

export function useWeb3BlocksDataContext(): Partial<DataState> {
  return useContext(Web3BlocksData)
}
