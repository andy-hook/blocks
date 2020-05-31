import React from "react"

import Transfer from "./transfer"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<Transfer />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Transfer from="string" to="string" />)
    expect(tree).toBeTruthy()
  })
})
