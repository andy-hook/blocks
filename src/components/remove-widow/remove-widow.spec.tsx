import React from "react"

import RemoveWidow from "./remove-widow"
import { renderWithTheme } from "@test-utils"

describe("<RemoveWidow />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <RemoveWidow>This is test text</RemoveWidow>
    )

    expect(tree).toMatchSnapshot()
  })
})
