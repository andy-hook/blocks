import React from "react"
import BlockSingleTrx from "./block-single-trx"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<BlockSingleTrx />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockSingleTrx transactions={mockMultipleWeb3TransactionData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
