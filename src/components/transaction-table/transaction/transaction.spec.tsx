import React from "react"
import Transaction from "./transaction"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<Transaction />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Transaction blockNumber="1" />)
    expect(tree).toBeTruthy()
  })
})
