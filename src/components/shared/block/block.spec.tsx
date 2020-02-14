import React from "react"
import Block from "./block"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<Block />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Block />)
    expect(tree).toMatchSnapshot()
  })
})
