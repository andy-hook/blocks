import React from "react"
import "jest-styled-components"
import renderer from "react-test-renderer"
import styled from "styled-components"
import {
  createHsl,
  createHsla,
  createCubicBezier,
  createTextCrop,
  createPlaceholderCrop,
} from "./utils"

const CroppedTextComponent = styled.div`
  ${createTextCrop({
    lHeight: 1.5,
    topCrop: 10,
    bottomCrop: 15,
  })}
`

const CroppedPlaceholderComponent = styled.div`
  ${createPlaceholderCrop({
    lHeight: 1.5,
    topCrop: 10,
    bottomCrop: 15,
  })}
`

describe("createHsl", () => {
  it("should return valid hsl css string from provided value", () => {
    expect(createHsl("240,17%,2%")).toMatch("hsl(240,17%,2%)")
  })
})

describe("createHsla", () => {
  it("should return valid hsla css string from provided value", () => {
    expect(createHsla("240,17%,2%", 50)).toMatch("hsla(240,17%,2%,50)")
  })
})

describe("createCubicBezier", () => {
  it("should return valid cubic-bezier css string from provided values", () => {
    expect(createCubicBezier([0.55, 0.085, 0.68, 0.53])).toMatch(
      "cubic-bezier(0.55,0.085,0.68,0.53)"
    )
  })
})

describe("createTextCrop", () => {
  it("should apply correct top and bottom offsets", () => {
    const tree = renderer.create(<CroppedTextComponent />).toJSON()

    expect(tree).toHaveStyleRule("margin-bottom", "calc(-0.35em + 0px)", {
      modifier: "::before",
    })

    expect(tree).toHaveStyleRule("margin-top", "calc(-0.4em + 0px)", {
      modifier: "::after",
    })
  })
})

describe("createPlaceholderCrop", () => {
  it("should apply correct top and bottom crop offsetting", () => {
    const tree = renderer.create(<CroppedPlaceholderComponent />).toJSON()

    expect(tree).toHaveStyleRule("top", "calc(0.35em + 0px)")

    expect(tree).toHaveStyleRule("bottom", "calc(0.4em + 0px)")
  })
})
