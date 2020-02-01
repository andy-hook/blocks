import { removeWidow, keys } from "@utils"

describe("removeWidow", () => {
  test("should return string with non-breaking space before last word", () => {
    expect(removeWidow("This is a test string")).toMatch(
      "This is a test\u00A0string"
    )
  })
})

describe("keys", () => {
  const inObject = {
    first: "",
    second: "",
    third: "",
  }

  const outArray = ["first", "second", "third"]

  it("returns an array of matching object keys", () => {
    expect(keys(inObject)).toEqual(outArray)
  })
})
