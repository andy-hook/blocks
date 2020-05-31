import React from "react"
import { renderWithTheme } from "@test-utils"

import Topbar from "./topbar"

describe("<Topbar />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Topbar />)
    expect(tree).toBeTruthy()
  })
})
