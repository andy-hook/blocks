import React from "react"
import TransactionsGrid from "./transactions-grid"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

describe("<BlockItem />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <TransactionsGrid transactions={mockMultipleWeb3TransactionData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
