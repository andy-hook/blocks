import React from "react"

import Button from "./button"
import { render } from "@test-utils"

describe("<Button />", () => {
  it("renders correctly", () => {
    const tree = render(
      <Button to="https://www.google.com">This is a button</Button>
    )

    expect(tree).toBeTruthy()
  })
})
