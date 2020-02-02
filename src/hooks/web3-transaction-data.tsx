import { useState, useEffect } from "react"
import { Web3BlockData, Web3TransactionData } from "model"
import { useWeb3Context } from "@providers/web3-provider/web3-provider"

interface DataState {
  data: Web3TransactionData[] | null
  loading: boolean
  error: {} | null
}

const useWeb3TransactionData = (
  transactions: Web3BlockData["transactions"]
) => {
  const context = useWeb3Context()
  const web3 = context.web3
  const [transactionsState, setTransactionsState] = useState<DataState>({
    data: null,
    loading: true,
    error: null,
  })

  const requestTransactions = () => {
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
      } catch (error) {
        // Failure
        setTransactionsState({ data: null, loading: false, error })
      }
    }

    // Even though transactions is type safe, checking again helps me sleep at night
    if (web3 && transactions) {
      fetch()
    }
  }, [web3])

  return { ...transactionsState }
}

export default useWeb3TransactionData
