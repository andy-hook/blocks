import {
  removeWidow,
  keys,
  lastNumbersFromRange,
  generateBlockNumberFromStaticRange,
  bigNum,
} from "@utils/general"

describe("bigNum", () => {
  const inValue = bigNum(100)

  it("returns a BigNumber", () => {
    expect(inValue).toEqual(inValue)
  })
})

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

  const outValues = [500, 499, 498, 497, 496, 495, 494, 493, 492, 491]

  it("returns array of last numbers of given range", () => {
    expect(lastNumbersFromRange(inValues)).toEqual(outValues)
  })
})

describe("generateBlockNumberFromStaticRange", () => {
  const min = 1
  const max = 90000
  const inValues = { min, max }

  it("returns a value inside given range", () => {
    expect(generateBlockNumberFromStaticRange(inValues)).toBeGreaterThan(min)
    expect(generateBlockNumberFromStaticRange(inValues)).toBeLessThan(max)
  })
})
