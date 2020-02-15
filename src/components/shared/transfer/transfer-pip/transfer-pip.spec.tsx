import React from "react"
import TransferPip from "./transfer-pip"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<TransferPip />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <TransferPip />)
    expect(tree).toMatchSnapshot()
  })
})
