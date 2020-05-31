import React from "react"
import Label from "./label"
import { render } from "@test-utils"

describe("<Label />", () => {
  it("renders correctly", () => {
    const tree = render(<Label />)
    expect(tree).toBeTruthy()
  })
})
