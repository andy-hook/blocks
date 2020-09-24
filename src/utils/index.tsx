import { getDefaultProvider } from "ethers"
import { BlockWithTransactions } from "@ethersproject/abstract-provider"

/**
 * Returns a string with which the last two words are joined via unicode non-breaking space
 */
export function removeWidow(str: string): string {
  return str.replace(/\s(?=[^\s]*$)/g, "\u00A0")
}

/**
 * Typescript helper for type safe mapping over object keys
 */
export function keys<O extends Record<string, unknown>>(
  obj: O
): Array<keyof O> {
  return Object.keys(obj) as Array<keyof O>
}

/**
 * Returns a number in a given range from highest value.
 */
export function lastNumbersFromRange({
  start,
  size,
}: {
  start: number
  size: number
}): number[] {
  const bottomOfRange = start - size + 1
  const matching = []
  let currentItem = bottomOfRange

  while (currentItem <= start) {
    matching.push(currentItem)

    currentItem++
  }

  return matching
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 */
export function generateBlockNumberFromStaticRange({
  min,
  max,
}: {
  min: number
  max: number
}): number {
  const minTop = Math.ceil(min)
  const maxBottom = Math.floor(max)

  return Math.floor(Math.random() * (maxBottom - minTop + 1)) + minTop
}

/**
 * Get a block (with transactions) from chain via block number
 */
const provider = getDefaultProvider("rinkeby")

export function getBlock(
  blockNumber: string | number
): Promise<BlockWithTransactions> {
  return provider.getBlockWithTransactions(blockNumber)
}
