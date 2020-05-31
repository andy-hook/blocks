import React from "react"
import Label from "./label"
import { renderWithTheme } from "@test-utils"

describe("<Label />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Label />)
    expect(tree).toBeTruthy()
  })
})
