import React from "react"
import BlockInfo from "./block-info"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockInfo />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockInfo />)
    expect(tree).toMatchSnapshot()
  })
})
