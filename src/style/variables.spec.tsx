import { constructMaxMediaString, constructMinMediaString } from "./variables"

describe("constructMaxMediaString", () => {
  test("should return correctly formatted media string", () => {
    expect(constructMaxMediaString("100px")).toEqual("(max-width: 100px)")
  })
})

describe("constructMinMediaString", () => {
  test("should return correctly formatted media string", () => {
    expect(constructMinMediaString("100px")).toEqual("(min-width: 100px)")
  })
})
