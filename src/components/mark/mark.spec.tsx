import React from "react"
import Mark from "./mark"
import { render } from "@test-utils"

describe("<Mark />", () => {
  it("renders correctly", () => {
    const tree = render(<Mark />)
    expect(tree).toBeTruthy()
  })
})
