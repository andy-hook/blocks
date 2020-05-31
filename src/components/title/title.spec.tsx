import React from "react"
import Title from "./title"
import { render } from "@test-utils"

describe("<Label />", () => {
  it("renders correctly", () => {
    const tree = render(<Title />)
    expect(tree).toBeTruthy()
  })
})
