import React from "react"

import Panel from "./panel"
import { renderWithTheme } from "@test-utils"

describe("<Panel />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Panel />)

    expect(tree).toBeTruthy()
  })
})
