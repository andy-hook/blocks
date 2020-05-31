import React from "react"
import { render } from "@test-utils"

import Topbar from "./topbar"

describe("<Topbar />", () => {
  it("renders correctly", () => {
    const tree = render(<Topbar />)
    expect(tree).toBeTruthy()
  })
})
