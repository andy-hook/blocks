import React from "react"
import TransactionsSummary from "./transactions-summary"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

describe("<TransactionsSummary />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <TransactionsSummary transactions={mockMultipleWeb3TransactionData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
