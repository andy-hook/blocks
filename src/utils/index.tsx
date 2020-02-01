export function removeWidow(str: string) {
  return str.replace(/\s(?=[^\s]*$)/g, "\u00A0")
}

export function keys<O extends object>(obj: O): Array<keyof O> {
  return Object.keys(obj) as Array<keyof O>
}
