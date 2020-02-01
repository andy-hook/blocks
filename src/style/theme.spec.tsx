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
} from "@style/theme"
import styled from "styled-components"
import "jest-styled-components"

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
