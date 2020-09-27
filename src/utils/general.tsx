// Import BigNumber away from the core package to avoid
// buid errors with SSG
import { BigNumber } from "ethers/lib/ethers"
export { BigNumber }

export function bigNum(value: string | number): BigNumber {
  return BigNumber.from(value)
}

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
 * Check for browser environment
 */
export const isBrowser = typeof window !== "undefined"

import dayjs from "dayjs"

type dateFormats = "onlyDate" | "standard" | "extended"

const KNOWN_FORMATS: { [key in dateFormats]: string } = {
  onlyDate: "YYYY/MM/DD",
  standard: "YYYY/MM/DD HH:mm",
  extended: "dddd, MMMM DD, YYYY h:mm:ss A",
}

export const toMs = (seconds: number): number => seconds * 1000

export function dateFormat(
  date: string | number | Date,
  format: dateFormats = "onlyDate"
): string {
  console.log(date)
  return dayjs(date).format(KNOWN_FORMATS[format] || format)
}
