import React from "react"
import TransactionTable from "./transaction-table"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<TransactionTable />", () => {
  it("renders correctly", () => {
    const tree = render(<TransactionTable transactions={""} />)
    expect(tree).toBeTruthy()
  })
})
