import React from "react"
import BlockDetails from "./block-details"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockDetails />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockDetails />)
    expect(tree).toMatchSnapshot()
  })
})
