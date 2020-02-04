import React, { createContext, useState, useEffect, useContext } from "react"
import { Web3BlockData, Web3TransactionData } from "model"
import { useWeb3Context } from "../web3-provider/web3-provider"
import { useWeb3BlocksDataContext } from "@providers/web3-blocks-data-provider/web3-blocks-data-provider"

interface DataState {
  data: Web3TransactionData[] | null
  loading: boolean
  error: {} | null
}

export const Web3TransactionsData = createContext<Partial<DataState>>({})

export const Web3TransactionsDataProvider: React.FunctionComponent = ({
  children,
}) => {
  const context = useWeb3Context()
  const blockDataContext = useWeb3BlocksDataContext()
  const web3 = context.web3
  const [transactionsState, setTransactionsState] = useState<DataState>({
    data: null,
    loading: true,
    error: null,
  })

  const requestTransactions = (blockData: Web3BlockData[]) => {
    const batchRequest = new web3.eth.BatchRequest()

    const batchPromise = blockData.map(block => {
      return Promise.all(
        block.transactions.map(transaction => {
          return new Promise((resolve, reject) => {
            batchRequest.add(
              web3.eth.getTransaction.request(
                transaction,
                async (error: {}, data: Web3TransactionData) => {
                  if (error) {
                    reject(error)
                  } else {
                    // const { gasUsed } = await web3.eth.getTransactionReceipt(
                    //   data.hash
                    // )
                    // const transactionFee = parseFloat(data.gasPrice) * gasUsed // calculate the transaction fee
                    resolve({
                      ...data,
                      // fee: web3.utils.fromWei(`${transactionFee}`),
                      ether: web3.utils.fromWei(new web3.utils.BN(data.value)),
                    })
                  }
                }
              )
            )
          })
        })
      )
    })

    // console.log(batchPromise)

    batchRequest.execute()
    return Promise.all(batchPromise)
  }

  useEffect(() => {
    const fetch = async (data: Web3TransactionData[]) => {
      try {
        const allTransactionsData = await requestTransactions(data)

        // Success
        setTransactionsState({
          data: allTransactionsData,
          loading: false,
          error: null,
        })

        console.log(allTransactionsData)
      } catch (error) {
        // Failure
        setTransactionsState({ data: null, loading: false, error })
      }
    }

    // Make sure to only request the blocks once per app bootstrap
    if (web3 && !blockDataContext.loading) {
      fetch(blockDataContext.data)
    }
  }, [blockDataContext.loading])

  return (
    <Web3TransactionsData.Provider value={transactionsState}>
      {children}
    </Web3TransactionsData.Provider>
  )
}

export default Web3TransactionsDataProvider

export function useWeb3TransactionsDataContext() {
  return useContext(Web3TransactionsData)
}
