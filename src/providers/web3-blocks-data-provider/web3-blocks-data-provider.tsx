import React, { createContext, useState, useEffect, useContext } from "react"
import { Web3BlockData, Web3TransactionData } from "model"
import { useWeb3Context } from "../web3-provider/web3-provider"
import { lastNumbersFromRange } from "@utils"

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

  const requestTransactions = (transactions: string[]) => {
    const batchRequest = new web3.eth.BatchRequest()

    const batchPromise = transactions.map(transaction => {
      return new Promise((resolve, reject) => {
        batchRequest.add(
          web3.eth.getTransaction.request(
            transaction,
            async (error: {}, data: Web3TransactionData) => {
              if (error) {
                reject(error)
              } else {
                resolve({
                  ...data,
                  ether: web3.utils.fromWei(new web3.utils.BN(data.value)),
                })
              }
            }
          )
        )
      })
    })

    batchRequest.execute()

    return Promise.all(batchPromise)
  }

  const requestBlocks = (blocks: number[]) => {
    const batchRequest = new web3.eth.BatchRequest()

    const batchPromise = blocks.map(block => {
      return new Promise((resolve, reject) => {
        batchRequest.add(
          web3.eth.getBlock.request(
            block,
            async (error: {}, data: Web3BlockData) => {
              if (error) {
                reject(error)
              } else {
                const transactionsData = await requestTransactions(
                  data.transactions
                )

                resolve({
                  ...data,
                  transactionsData,
                  transactionCount: transactionsData.length,
                })
              }
            }
          )
        )
      })
    })

    batchRequest.execute()
    return Promise.all(batchPromise)
  }

  useEffect(() => {
    const fetchAllData = async () => {
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

        console.log(allBlocksData)
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
