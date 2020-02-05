import React from "react"
import BlockCard from "./block-card"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

describe("<BlockCard />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockCard
        blockNumber={100}
        transactions={mockMultipleWeb3TransactionData}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})