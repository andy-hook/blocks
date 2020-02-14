import React from "react"
import BlockSingle from "./block-single"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockSingle />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockSingle />)
    expect(tree).toMatchSnapshot()
  })
})
