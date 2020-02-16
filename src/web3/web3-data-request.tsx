import { Web3BlockData, Web3TransactionData } from "model"

function requestTransactions(web3Instance: any, transactions: string[]) {
  const batchRequest = new web3Instance.eth.BatchRequest()

  const batchPromise = transactions.map(transaction => {
    return new Promise((resolve, reject) => {
      batchRequest.add(
        web3Instance.eth.getTransaction.request(
          transaction,
          async (error: {}, data: Web3TransactionData) => {
            if (error) {
              reject(error)
            } else {
              resolve({
                ...data,
                ether: parseFloat(
                  web3Instance.utils.fromWei(
                    new web3Instance.utils.BN(data.value)
                  )
                ),
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

export async function requestBlocks(web3Instance: any, blocks: number[]) {
  const batchRequest = new web3Instance.eth.BatchRequest()

  const batchPromise = blocks.map(block => {
    return new Promise((resolve, reject) => {
      batchRequest.add(
        web3Instance.eth.getBlock.request(
          block,
          async (error: {}, data: Web3BlockData) => {
            if (error || !data) {
              reject(error)
            } else {
              const transactionsData = await requestTransactions(
                web3Instance,
                data && data.transactions
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
