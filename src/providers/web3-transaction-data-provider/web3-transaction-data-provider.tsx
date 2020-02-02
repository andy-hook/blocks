import React, { createContext, useState, useEffect, useContext } from "react"
import { Web3BlockData, Web3TransactionData } from "model"
import { useWeb3Context } from "../web3-provider/web3-provider"

interface Props {
  transactions: Web3BlockData["transactions"]
}

interface DataState {
  data: Web3TransactionData[] | null
  loading: boolean
  error: {} | null
}

export const Web3TransactionsData = createContext<Partial<DataState>>({})

export const Web3TransactionsDataProvider: React.FunctionComponent<Props> = ({
  children,
  transactions,
}) => {
  const context = useWeb3Context()
  const web3 = context.web3
  const [transactionsState, setTransactionsState] = useState<DataState>({
    data: null,
    loading: true,
    error: null,
  })

  const requestTransactions = () => {
    // const batchRequest = new web3.eth.BatchRequest()

    // const batchPromise = blocks.map(block => {
    //   return new Promise((resolve, reject) => {
    //     batchRequest.add(
    //       web3.eth.getBlock.request(block, (error: any, data: []) => {
    //         error ? reject(error) : resolve(data)
    //       })
    //     )
    //   })
    // })

    // batchRequest.execute()
    // return Promise.all(batchPromise)
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
                const { gasUsed } = await web3.eth.getTransactionReceipt(
                  data.hash
                )
                const transactionFee = parseFloat(data.gasPrice) * gasUsed // calculate the transaction fee
                resolve({
                  ...data,
                  fee: web3.utils.fromWei(`${transactionFee}`),
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

  useEffect(() => {
    const fetch = async () => {
      try {
        const allTransactionsData = (await requestTransactions()) as Web3TransactionData[]

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
    if (web3 && !transactionsState.data) {
      fetch()
    }
  }, [web3])

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
