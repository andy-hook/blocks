import React from "react"
import BlockHeader from "./block-header"
import { renderWithTheme } from "@test-utils"

describe("<BlockHeader />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockHeader />)
    expect(tree).toMatchSnapshot()
  })
})
