import { Web3BlockData, Web3TransactionData } from "model"
import { getDefaultProvider } from "ethers"
import Web3 from "web3"
import { BlockWithTransactions } from "@ethersproject/abstract-provider"

function requestTransactions(web3Instance: Web3, transactions: string[]) {
  const batchRequest = new web3Instance.eth.BatchRequest()

  const batchPromise = transactions.map(transaction => {
    return new Promise((resolve, reject) => {
      batchRequest.add(
        // @ts-ignore – request doesn't exist in types
        // https://github.com/ethereum/web3.js/issues/3144
        // eslint-disable-next-line
        web3Instance.eth.getTransaction.request(
          transaction,
          (error: Record<string, unknown>, data: Web3TransactionData) => {
            if (error) {
              reject(error)
            } else {
              resolve({
                ...data,
                ether: parseFloat(
                  web3Instance.utils.fromWei(
                    web3Instance.utils.toBN(data.value)
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

export async function requestBlocks(
  web3Instance: Web3,
  blocks: number[]
): Promise<unknown[]> {
  const batchRequest = new web3Instance.eth.BatchRequest()

  const batchPromise = blocks.map(block => {
    return new Promise((resolve, reject) => {
      batchRequest.add(
        // @ts-ignore – request doesn't exist in types
        // https://github.com/ethereum/web3.js/issues/3144
        // eslint-disable-next-line
        web3Instance.eth.getBlock.request(
          block,
          async (error: Record<string, unknown>, data: Web3BlockData) => {
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

const provider = getDefaultProvider("rinkeby")

export function getBlock(
  blockNumber: string | number
): Promise<BlockWithTransactions> {
  return provider.getBlockWithTransactions(blockNumber)
}
