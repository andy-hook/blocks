import React from "react"
import TransactionTable from "./transaction-table"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<TransactionTable />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <TransactionTable transactions={mockMultipleWeb3TransactionData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
