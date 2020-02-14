import React from "react"
import BlockSingleHeader from "./block-single-header"
import { renderWithTheme } from "@test-utils"

describe("<BlockSingleHeader />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockSingleHeader />)
    expect(tree).toMatchSnapshot()
  })
})
