import React from "react"
import { mountWithTheme } from "@test-utils"
import {
  themeForeground,
  themeForegroundAlpha,
  isDarkTheme,
  isLightTheme,
  isTheme,
  darkThemeForeground,
  darkThemeForegroundAlpha,
  lightThemeForeground,
  lightThemeForegroundAlpha,
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

const ThemeForegroundComponent = styled.div`
  color: ${themeForeground("medium")};
`

const ThemeForegroundAlphaComponent = styled.div`
  color: ${themeForegroundAlpha("medium", 0)};
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

describe("darkThemeForeground", () => {
  test("should return correct value as hsl string", () => {
    expect(darkThemeForeground("medium")).toEqual("hsl(206, 10%, 55%)")
  })
})

describe("darkThemeForegroundAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(darkThemeForegroundAlpha("medium", 50)).toEqual(
      "hsla(206, 10%, 55%,50)"
    )
  })
})

describe("lightThemeLayer", () => {
  test("should return correct value as hsl string", () => {
    expect(lightThemeLayer("medium")).toEqual("hsl(220, 16%, 96%)")
  })
})

describe("lightThemeLayerAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(lightThemeLayerAlpha("medium", 50)).toEqual("hsla(220, 16%, 96%,50)")
  })
})

describe("lightThemeForeground", () => {
  test("should return correct value as hsl string", () => {
    expect(lightThemeForeground("medium")).toEqual("hsl(206, 10%, 55%)")
  })
})

describe("lightThemeForegroundAlpha", () => {
  test("should return correct value as hsla string", () => {
    expect(lightThemeForegroundAlpha("medium", 50)).toEqual(
      "hsla(206, 10%, 55%,50)"
    )
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

describe("ThemeForeground", () => {
  it("renders correct hsl from given text value", () => {
    const tree = mountWithTheme("dark", <ThemeForegroundComponent />)
    expect(tree).toHaveStyleRule("color", "hsl(206,10%,55%)")
  })
})

describe("ThemeForegroundAlpha", () => {
  it("renders correct hsla from given text value", () => {
    const tree = mountWithTheme("dark", <ThemeForegroundAlphaComponent />)
    expect(tree).toHaveStyleRule("color", "hsla(206,10%,55%,0)")
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
