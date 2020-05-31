import React from "react"
import BlockInfoRow from "./block-info-row"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockInfoRow />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockInfoRow name="string" value="string" />
    )
    expect(tree).toBeTruthy()
  })
})
