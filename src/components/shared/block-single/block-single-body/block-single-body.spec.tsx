import React from "react"
import BlockSingleBody from "./block-single-body"
import { renderWithTheme } from "@test-utils"

describe("<BlockSingleBody />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockSingleBody />)
    expect(tree).toMatchSnapshot()
  })
})
