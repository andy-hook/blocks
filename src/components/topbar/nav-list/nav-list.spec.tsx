import React from "react"
import { renderWithTheme } from "@test-utils"

import NavList from "./nav-list"

describe("<Navigation />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <NavList />)
    expect(tree).toMatchSnapshot()
  })
})
