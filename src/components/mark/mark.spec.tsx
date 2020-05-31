import React from "react"
import Mark from "./mark"
import { renderWithTheme } from "@test-utils"

describe("<Mark />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Mark />)
    expect(tree).toBeTruthy()
  })
})
