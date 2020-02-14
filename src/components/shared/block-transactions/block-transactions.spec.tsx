import React from "react"
import BlockTransactions from "./block-transactions"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<BlockSingleTrx />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockTransactions transactions={mockMultipleWeb3TransactionData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
