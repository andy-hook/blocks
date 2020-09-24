import { getDefaultProvider } from "ethers"
import { BlockWithTransactions } from "@ethersproject/abstract-provider"

const provider = getDefaultProvider("rinkeby")

export function getBlock(
  blockNumber: string | number
): Promise<BlockWithTransactions> {
  return provider.getBlockWithTransactions(blockNumber)
}
