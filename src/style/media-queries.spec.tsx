import React from "react"
import { stripUnit } from "polished"
import { uniformScale, scaleBetween, scaleGreaterThan } from "./media-queries"
import renderer from "react-test-renderer"
import styled from "styled-components"
import "jest-styled-components"

const ScaleBetweenComponent = styled.div`
  ${scaleBetween("font-size", "10rem", "20rem", "bottomThumb", "topThumb")}
`

const ScaleGreaterThanComponent = styled.div`
  ${scaleGreaterThan("font-size", "10rem", "bottomThumb")}
`

describe("uniformScale", () => {
  test("should return a viewport unit", () => {
    const out = stripUnit(uniformScale("100px", "topUltra"), true)[1]

    expect(out).toEqual("vw")
  })

  test("should return correct value when supplied PX unit", () => {
    expect(uniformScale("10px", "topUltra")).toMatch("0.45454545454545453vw")
  })

  test("should return correct value when supplied EM unit", () => {
    expect(uniformScale("10em", "topUltra")).toMatch("7.2727272727272725vw")
  })

  test("should return correct value when supplied REM unit", () => {
    expect(uniformScale("10rem", "topUltra")).toMatch("7.2727272727272725vw")
  })
})

describe("scaleBetween", () => {
  it("renders correct values inside media queries", () => {
    const tree = renderer.create(<ScaleBetweenComponent />).toJSON()

    expect(tree).toHaveStyleRule(
      "font-size",
      "calc(-4780.00rem + 16000.00vw)",
      {
        media: "(min-width: 29.9375em) and (max-width: 30em)",
      }
    )
  })
})

describe("scaleGreaterThan", () => {
  it("renders correct value inside media queries", () => {
    const tree = renderer.create(<ScaleGreaterThanComponent />).toJSON()

    expect(tree).toHaveStyleRule("font-size", "33.40292275574113vw", {
      media: "(min-width: 29.9375em)",
    })
  })
})
