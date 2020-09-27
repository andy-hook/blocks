import React from "react"
import TransactionTable from "./transaction-table"
import { render } from "@test-utils"
import { transactions } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<TransactionTable />", () => {
  it("renders correctly", () => {
    const tree = render(<TransactionTable transactions={transactions} />)
    expect(tree).toBeTruthy()
  })
})
