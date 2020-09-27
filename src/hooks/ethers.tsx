import { useCallback, useMemo } from "react"
import { isBrowser } from "@utils/general"
import {
  Provider,
  BlockWithTransactions,
} from "@ethersproject/abstract-provider"

interface EthersState {
  getBlock: Provider["getBlockWithTransactions"]
  getLatestBlockNumber: Provider["getBlockNumber"]
}

function useEthers(): EthersState {
  /**
   * Get a block (with transactions) from chain via block number
   */
  const getBlock = useCallback((blockNumber: string | number): Promise<
    BlockWithTransactions
  > => {
    if (!isBrowser) {
      // @ts-ignore
      return null
    }
    return window.ethersProvider.getBlockWithTransactions(blockNumber)
  }, [])

  /**
   * Get the latest mined block number from chain
   */
  const getLatestBlockNumber = useCallback((): Promise<number> => {
    if (!isBrowser) {
      // @ts-ignore
      return null
    }
    return window.ethersProvider.getBlockNumber()
  }, [])

  const ethersState = useMemo<EthersState>(
    () => ({
      getBlock,
      getLatestBlockNumber,
    }),
    [getBlock, getLatestBlockNumber]
  )

  return ethersState
}

export default useEthers
