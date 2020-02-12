import React from "react"
import Value from "./value"
import { renderWithTheme } from "@test-utils"

describe("<Value />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Value />)
    expect(tree).toMatchSnapshot()
  })
})
