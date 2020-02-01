import {
  constructMaxMediaString,
  constructMinMediaString,
  darkThemeText,
  darkThemeTextAlpha,
  darkThemeTone,
  darkThemeToneAlpha,
  lightThemeText,
  lightThemeTextAlpha,
  lightThemeTone,
  lightThemeToneAlpha,
} from "./variables"

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

describe("darkThemeText", () => {
  test("should return correct value as hsl string", () => {
    expect(darkThemeText(100)).toEqual("hsl(240, 3%, 100%)")
  })
})

describe("darkThemeTextAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(darkThemeTextAlpha(100, 50)).toEqual("hsla(240, 3%, 100%,50)")
  })
})

describe("darkThemeTone", () => {
  test("should return correct value as hsl string", () => {
    expect(darkThemeTone(100)).toEqual("hsl(240, 6%, 7%)")
  })
})

describe("darkThemeToneAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(darkThemeToneAlpha(100, 50)).toEqual("hsla(240, 6%, 7%,50)")
  })
})

describe("lightThemeText", () => {
  test("should return correct value as hsl string", () => {
    expect(lightThemeText(100)).toEqual("hsl(240, 3%, 100%)")
  })
})

describe("lightThemeTextAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(lightThemeTextAlpha(100, 50)).toEqual("hsla(240, 3%, 100%,50)")
  })
})

describe("lightThemeTone", () => {
  test("should return correct value as hsl string", () => {
    expect(lightThemeTone(100)).toEqual("hsl(240, 3%, 100%)")
  })
})

describe("lightThemeToneAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(lightThemeToneAlpha(100, 50)).toEqual("hsla(240, 3%, 100%,50)")
  })
})
