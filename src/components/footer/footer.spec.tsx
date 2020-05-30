import React from "react"
import Footer from "./footer"
import { renderWithTheme } from "@test-utils"

describe("<Footer />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Footer />)
    expect(tree).toMatchSnapshot()
  })
})
