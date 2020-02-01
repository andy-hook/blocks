import React from "react"
import "jest-styled-components"
import renderer from "react-test-renderer"
import styled from "styled-components"
import {
  createHsl,
  createHsla,
  createCubicBezier,
  createTextCrop,
} from "./utils"

const CroppedTextComponent = styled.div`
  ${createTextCrop({
    lHeight: 1.5,
    topCrop: 10,
    bottomCrop: 15,
  })}
`

describe("createHsl", () => {
  test("should return valid hsl css string from provided value", () => {
    expect(createHsl("240,17%,2%")).toMatch("hsl(240,17%,2%)")
  })
})

describe("createHsla", () => {
  test("should return valid hsla css string from provided value", () => {
    expect(createHsla("240,17%,2%", 50)).toMatch("hsla(240,17%,2%,50)")
  })
})

describe("createCubicBezier", () => {
  test("should return valid cubic-bezier css string from provided values", () => {
    expect(createCubicBezier([0.55, 0.085, 0.68, 0.53])).toMatch(
      "cubic-bezier(0.55,0.085,0.68,0.53)"
    )
  })
})

describe("createTextCrop", () => {
  test("should apply correct top and bottom offsets", () => {
    const tree = renderer.create(<CroppedTextComponent />).toJSON()

    expect(tree).toHaveStyleRule("margin-bottom", "calc(-0.35em + 0px)", {
      modifier: "::before",
    })

    expect(tree).toHaveStyleRule("margin-top", "calc(-0.4em + 0px)", {
      modifier: "::after",
    })
  })
})
