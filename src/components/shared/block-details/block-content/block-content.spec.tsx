import React from "react"
import BlockContent from "./block-content"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockContent />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockContent />)
    expect(tree).toMatchSnapshot()
  })
})
