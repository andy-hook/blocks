import React from "react"
import renderer from "react-test-renderer"

import Limiter from "./limiter"

describe("<Limiter />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Limiter>Child text</Limiter>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders as small", () => {
    const tree = renderer
      .create(<Limiter size="small">Child text</Limiter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders as medium", () => {
    const tree = renderer
      .create(<Limiter size="medium">Child text</Limiter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders as large", () => {
    const tree = renderer
      .create(<Limiter size="large">Child text</Limiter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
