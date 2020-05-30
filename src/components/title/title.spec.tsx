import React from "react"
import Title from "./title"
import { renderWithTheme } from "@test-utils"

describe("<Label />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Title />)
    expect(tree).toMatchSnapshot()
  })
})
