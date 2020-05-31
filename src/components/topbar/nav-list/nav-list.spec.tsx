import React from "react"
import { render } from "@test-utils"

import NavList from "./nav-list"

describe("<Navigation />", () => {
  it("renders correctly", () => {
    const tree = render(<NavList />)
    expect(tree).toBeTruthy()
  })
})
