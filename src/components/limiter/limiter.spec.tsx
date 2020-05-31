import React from "react"
import { render } from "@test-utils"
import Limiter from "./limiter"

describe("<Limiter />", () => {
  it("renders correctly", () => {
    const tree = render(<Limiter>Child text</Limiter>)
    expect(tree).toBeTruthy()
  })
})
