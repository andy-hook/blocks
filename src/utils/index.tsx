export const BLOCK_COUNT = 10

export function removeWidow(str: string) {
  return str.replace(/\s(?=[^\s]*$)/g, "\u00A0")
}

export function keys<O extends object>(obj: O): Array<keyof O> {
  return Object.keys(obj) as Array<keyof O>
}

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
