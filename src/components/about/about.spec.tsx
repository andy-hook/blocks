import React from "react"

import About from "./about"
import { renderWithTheme } from "@test-utils"

jest.mock("@hooks/page-transition")

describe("<About />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <About />)
    expect(tree).toMatchSnapshot()
  })
})
