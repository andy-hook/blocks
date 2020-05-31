import React from "react"

import LoadingIndicator from "./loading-indicator"
import { render } from "@test-utils"

describe("<LoadingIndicator />", () => {
  it("renders correctly", () => {
    const tree = render(<LoadingIndicator />)

    expect(tree).toBeTruthy()
  })
})
