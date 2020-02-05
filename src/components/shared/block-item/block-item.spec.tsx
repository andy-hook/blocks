import React from "react"
import BlockItem from "./block-item"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

describe("<BlockItem />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockItem
        blockNumber={100}
        transactions={mockMultipleWeb3TransactionData}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
