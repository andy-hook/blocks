import React from "react"
import BlockCard from "./block-card"
import { renderWithTheme } from "@test-utils"
import { mockWeb3BlockData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<BlockCard />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <BlockCard blockData={mockWeb3BlockData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
