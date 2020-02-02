import React from "react"
import BlockList from "./block-list"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3BlockData } from "@data/mocks"

describe("<BlockList />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockList blocks={mockMultipleWeb3BlockData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
