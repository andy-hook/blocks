import React from "react"

import RemoveWidow from "./remove-widow"
import { render } from "@test-utils"

describe("<RemoveWidow />", () => {
  it("renders correctly", () => {
    const tree = render(<RemoveWidow>This is test text</RemoveWidow>)

    expect(tree).toBeTruthy()
  })
})
