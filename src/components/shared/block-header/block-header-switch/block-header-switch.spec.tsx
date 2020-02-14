import React from "react"
import BlockHeaderSwitch from "./block-header-switch"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockHeaderSwitch />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockHeaderSwitch
        onDetailsClock={jest.fn}
        onTransactionsClick={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
