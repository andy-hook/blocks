import React from "react"
import BlockSingleInfoRow from "./block-single-info-row"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockSingleInfoRow />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockSingleInfoRow name="string" value="string" />
    )
    expect(tree).toMatchSnapshot()
  })
})
