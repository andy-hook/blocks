import React from "react"
import BlockTransactionCols from "./block-transaction-cols"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockTransactionCols />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockTransactionCols
        block="string"
        hash="string"
        fromTo="string"
        value="string"
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
