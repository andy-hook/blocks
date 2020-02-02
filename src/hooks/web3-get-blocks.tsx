import { useEffect, useState } from "react"
import { useWeb3Context } from "@components/shared/web3-provider/web3-provider"
import { lastNumbersFromRange } from "@utils"

const maxBlocks = 10

interface StateProps {
  data?: any
  loading: boolean
  error: null
}

const useWeb3GetBlocks = () => {
  const context = useWeb3Context()
  const web3 = context.web3
  const [blocksState, setBlocksState] = useState<StateProps>({
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
        const allBlocksData = await requestBlocks(blocksToRequest)

        // Success
        setBlocksState({ data: allBlocksData, loading: false, error: null })
      } catch (error) {
        // Failure
        setBlocksState({ loading: false, error })
      }
    }

    if (web3) {
      fetch()
    }
  }, [web3])

  return blocksState
}

export default useWeb3GetBlocks
