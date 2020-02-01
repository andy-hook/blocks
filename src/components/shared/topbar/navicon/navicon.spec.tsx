import React from "react"
import { renderWithTheme } from "@test-utils"

import Navicon from "./navicon"

describe("<Navicon />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Navicon onClick={jest.fn} />)
    expect(tree).toMatchSnapshot()
  })
})
