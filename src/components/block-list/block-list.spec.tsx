import React from "react"
import BlockList from "./block-list"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3BlockData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<BlockList />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockList blockData={mockMultipleWeb3BlockData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
