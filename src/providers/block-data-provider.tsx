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

type DataState = BlockWithTransactions[] | null

const DataContext = createContext<Partial<DataState>>(null)

const BlockDataProvider: React.FunctionComponent<Props> = ({
  children,
  maxBlocks = 12,
}) => {
  const [blocksData, setBlocksData] = useState<DataState>(null)

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

  const blocksDataState = useMemo(() => blocksData, [blocksData])

  return (
    <DataContext.Provider value={blocksDataState}>
      {children}
    </DataContext.Provider>
  )
}

function useBlockData() {
  return useContext(DataContext)
}

export { BlockDataProvider, useBlockData }
