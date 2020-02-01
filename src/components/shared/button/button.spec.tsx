import React from "react"

import Button from "./button"
import { renderWithTheme } from "@test-utils"

describe("<Button />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Button href="https://www.google.com">This is a button</Button>
    )

    expect(tree).toMatchSnapshot()
  })
})
