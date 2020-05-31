import React from "react"

import LoadingIndicator from "./loading-indicator"
import { renderWithTheme } from "@test-utils"

describe("<LoadingIndicator />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <LoadingIndicator />)

    expect(tree).toBeTruthy()
  })
})
