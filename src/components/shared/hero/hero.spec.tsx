import React from "react"
import Hero from "./hero"
import { renderWithTheme } from "@test-utils"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Hero />)
    expect(tree).toMatchSnapshot()
  })
})
