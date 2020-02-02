import { removeWidow, keys, lastNumbersFromRange } from "@utils"

describe("removeWidow", () => {
  test("returns string with non-breaking space before last word", () => {
    expect(removeWidow("This is a test string")).toMatch(
      "This is a test\u00A0string"
    )
  })
})

describe("keys", () => {
  const inValues = {
    first: "",
    second: "",
    third: "",
  }

  const outValues = ["first", "second", "third"]

  it("returns array of matching object keys", () => {
    expect(keys(inValues)).toEqual(outValues)
  })
})

describe("lastNumbersFromRange", () => {
  const inValues = { start: 500, size: 10 }

  const outValues = [491, 492, 493, 494, 495, 496, 497, 498, 499, 500]

  it("returns array of last numbers of given range", () => {
    expect(lastNumbersFromRange(inValues)).toEqual(outValues)
  })
})
