import React from "react"
import BlockItem from "./block-item"
import { renderWithTheme } from "@test-utils"
import { mockWeb3BlockTransactions } from "@data/mocks"

describe("<BlockItem />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockItem blockNumber={100} transactions={mockWeb3BlockTransactions} />
    )
    expect(tree).toMatchSnapshot()
  })
})
