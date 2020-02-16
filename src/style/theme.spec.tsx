import React from "react"
import { mountWithTheme } from "@test-utils"
import {
  themeToneAlpha,
  themeTone,
  themeText,
  themeTextAlpha,
  isDarkTheme,
  isLightTheme,
  isTheme,
  darkThemeText,
  darkThemeTextAlpha,
  darkThemeTone,
  darkThemeToneAlpha,
  lightThemeText,
  lightThemeTextAlpha,
  lightThemeTone,
  lightThemeToneAlpha,
  themeLayer,
  themeLayerAlpha,
  darkThemeLayer,
  darkThemeLayerAlpha,
  lightThemeLayer,
  lightThemeLayerAlpha,
} from "@style/theme"
import styled from "styled-components"
import "jest-styled-components"

const ThemeLayerComponent = styled.div`
  color: ${themeLayer("medium")};
`

const ThemeLayerAlphaComponent = styled.div`
  color: ${themeLayerAlpha("medium", 0.5)};
`

const ThemeToneComponent = styled.div`
  color: ${themeTone(100)};
`

const ThemeToneAlphaComponent = styled.div`
  color: ${themeToneAlpha(100, 0)};
`

const ThemeTextComponent = styled.div`
  color: ${themeText(100)};
`

const ThemeTextAlphaComponent = styled.div`
  color: ${themeTextAlpha(100, 0)};
`

const IsDarkThemeComponent = styled.div`
  ${isDarkTheme("color: red;")};
`

const IsLightThemeComponent = styled.div`
  ${isLightTheme("color: red;")};
`

const IsThemeComponent = styled.div`
  ${isTheme("dark", "color: red;")};
`

const IsNotThemeComponent = styled.div`
  ${isTheme("dark", "color: red;", "color: blue;")};
`

describe("darkThemeLayer", () => {
  test("should return correct value as hsl string", () => {
    expect(darkThemeLayer("medium")).toEqual("hsl(207, 13%, 14%)")
  })
})

describe("darkThemeLayerAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(darkThemeLayerAlpha("medium", 50)).toEqual("hsla(207, 13%, 14%,50)")
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

describe("lightThemeLayer", () => {
  test("should return correct value as hsl string", () => {
    expect(lightThemeLayer("medium")).toEqual("hsl(20, 13%, 14%)")
  })
})

describe("lightThemeLayerAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(lightThemeLayerAlpha("medium", 50)).toEqual("hsla(20, 13%, 14%,50)")
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

describe("themeTone", () => {
  it("renders correct hsl from given tone value", () => {
    const tree = mountWithTheme("dark", <ThemeToneComponent />)
    expect(tree).toHaveStyleRule("color", `hsl(240,6%,7%)`)
  })
})

describe("themeToneAlpha", () => {
  it("renders correct hsla from given tone value", () => {
    const tree = mountWithTheme("dark", <ThemeToneAlphaComponent />)
    expect(tree).toHaveStyleRule("color", "hsla(240,6%,7%,0)")
  })
})

describe("darkThemeLayer", () => {
  it("renders correct hsl from given layer value", () => {
    const tree = mountWithTheme("dark", <ThemeLayerComponent />)
    expect(tree).toHaveStyleRule("color", `hsl(207,13%,14%)`)
  })
})

describe("darkThemeLayerAlpha", () => {
  it("renders correct hsla from given layer and opacity value", () => {
    const tree = mountWithTheme("dark", <ThemeLayerAlphaComponent />)
    expect(tree).toHaveStyleRule("color", "hsla(207,13%,14%,0.5)")
  })
})

describe("themeText", () => {
  it("renders correct hsl from given text value", () => {
    const tree = mountWithTheme("dark", <ThemeTextComponent />)
    expect(tree).toHaveStyleRule("color", "hsl(240,3%,100%)")
  })
})

describe("themeTextAlpha", () => {
  it("renders correct hsla from given text value", () => {
    const tree = mountWithTheme("dark", <ThemeTextAlphaComponent />)
    expect(tree).toHaveStyleRule("color", "hsla(240,3%,100%,0)")
  })
})

describe("isDarkTheme", () => {
  it("renders style block when using a dark theme", () => {
    const tree = mountWithTheme("dark", <IsDarkThemeComponent />)
    expect(tree).toHaveStyleRule("color", "red")
  })

  it("does not render style block when using a light theme", () => {
    const tree = mountWithTheme("light", <IsDarkThemeComponent />)
    expect(tree).not.toHaveStyleRule("color", "red")
  })
})

describe("isLightTheme", () => {
  it("renders style block when using a light theme", () => {
    const tree = mountWithTheme("light", <IsLightThemeComponent />)
    expect(tree).toHaveStyleRule("color", "red")
  })

  it("does not render style block when using a dark theme", () => {
    const tree = mountWithTheme("dark", <IsLightThemeComponent />)
    expect(tree).not.toHaveStyleRule("color", "red")
  })
})

describe("isTheme", () => {
  it("renders single argument style block when using a dark theme", () => {
    const tree = mountWithTheme("dark", <IsThemeComponent />)
    expect(tree).toHaveStyleRule("color", "red")
  })

  it("does not render single argument style block when using a light theme", () => {
    const tree = mountWithTheme("light", <IsThemeComponent />)
    expect(tree).not.toHaveStyleRule("color", "red")
  })

  it("renders first style block argument when using a dark theme", () => {
    const tree = mountWithTheme("dark", <IsNotThemeComponent />)
    expect(tree).toHaveStyleRule("color", "red")
  })

  it("renders second style block argument when using a light theme", () => {
    const tree = mountWithTheme("light", <IsNotThemeComponent />)
    expect(tree).toHaveStyleRule("color", "blue")
  })
})
