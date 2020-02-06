import React from "react"
import LabelText from "./label-text"
import { renderWithTheme } from "@test-utils"

describe("<LabelText />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <LabelText />)
    expect(tree).toMatchSnapshot()
  })
})
