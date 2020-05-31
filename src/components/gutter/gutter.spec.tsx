import React from "react"
import { render } from "@test-utils"
import Gutter from "./gutter"

describe("<Gutter />", () => {
  it("renders correctly", () => {
    const tree = render(<Gutter>Child text</Gutter>)
    expect(tree).toBeTruthy()
  })
})
