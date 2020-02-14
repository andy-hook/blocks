import React from "react"
import BlockInfoList from "./block-info-list"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockContent />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockInfoList />)
    expect(tree).toMatchSnapshot()
  })
})
