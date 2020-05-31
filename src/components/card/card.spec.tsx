import React from "react"
import Card from "./card"
import { render } from "@test-utils"
import { mockWeb3BlockData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<Card />", () => {
  it("renders correctly", () => {
    const tree = render(<Card blockData={mockWeb3BlockData} />)
    expect(tree).toBeTruthy()
  })
})
