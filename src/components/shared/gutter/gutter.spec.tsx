import React from "react"
import renderer from "react-test-renderer"

import Gutter from "./gutter"

describe("<Gutter />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Gutter>Child text</Gutter>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
