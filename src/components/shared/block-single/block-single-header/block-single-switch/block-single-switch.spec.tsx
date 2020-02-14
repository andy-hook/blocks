import React from "react"
import BlockSingleSwitch from "./block-single-switch"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockSingleSwitch />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockSingleSwitch
        handleDetailsClick={jest.fn}
        handleTransactionsClick={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
