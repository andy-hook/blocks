import React from "react"
import Card from "./card"
import { renderWithTheme } from "@test-utils"
import { mockWeb3BlockData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<Card />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Card blockData={mockWeb3BlockData} />)
    expect(tree).toMatchSnapshot()
  })
})
