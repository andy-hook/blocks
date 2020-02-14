import React from "react"
import BlockTransactionCols from "./block-transaction-cols"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockTransactionCols />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockTransactionCols
        one="string"
        two="string"
        three="string"
        four="string"
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
