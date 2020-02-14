import React from "react"
import BlockTransactionRow from "./block-transaction-row"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockTransactionRow />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockTransactionRow />)
    expect(tree).toMatchSnapshot()
  })
})
