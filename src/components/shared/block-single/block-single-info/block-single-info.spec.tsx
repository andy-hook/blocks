import React from "react"
import BlockSingleInfo from "./block-single-info"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockSingleInfo />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockSingleInfo />)
    expect(tree).toMatchSnapshot()
  })
})
