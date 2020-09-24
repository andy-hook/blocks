import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react"
import { getDefaultProvider } from "ethers"
import { BlockWithTransactions } from "@ethersproject/abstract-provider"
import { lastNumbersFromRange } from "@utils"

interface Props {
  maxBlocks?: number
}

type BlockDataState = [BlockWithTransactions[] | null, boolean]

const BlockDataContext = createContext<Partial<BlockDataState>>([null, true])

const BlockDataProvider: React.FunctionComponent<Props> = ({
  children,
  maxBlocks = 12,
}) => {
  const [blocksData, setBlocksData] = useState<BlockWithTransactions[] | null>(
    null
  )
  const [loading, setLoading] = useState<boolean>(true)

  const provider = getDefaultProvider("rinkeby")

  useEffect(() => {
    let cancelled = false

    async function getBlockData() {
      try {
        const latestBlockNumber = await provider.getBlockNumber()

        const blocksToRequest = lastNumbersFromRange({
          start: latestBlockNumber - maxBlocks,
          size: maxBlocks,
        })

        const response = await Promise.all(
          blocksToRequest.map(blockNumber => {
            return provider.getBlockWithTransactions(blockNumber)
          })
        )

        if (!cancelled) {
          setBlocksData(response)
          setLoading(false)
          console.log(response[1])
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (!blocksData) {
      void getBlockData()
    }

    return () => {
      cancelled = true
    }
  }, [provider, maxBlocks, blocksData])

  const blocksDataState = useMemo<BlockDataState>(() => [blocksData, loading], [
    blocksData,
    loading,
  ])

  return (
    <BlockDataContext.Provider value={blocksDataState}>
      {children}
    </BlockDataContext.Provider>
  )
}

function useBlockData() {
  return useContext(BlockDataContext)
}

export { BlockDataProvider, useBlockData }
