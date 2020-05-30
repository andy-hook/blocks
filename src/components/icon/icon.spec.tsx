import React from "react"
import renderer from "react-test-renderer"

import Icon from "./icon"

describe("Icon", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Icon name="twitter" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
