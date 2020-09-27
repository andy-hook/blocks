import React from "react"
import Card from "./card"
import { render } from "@test-utils"
import { blockWithTransactions } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<Card />", () => {
  it("renders correctly", () => {
    const tree = render(<Card blockData={blockWithTransactions} />)
    expect(tree).toBeTruthy()
  })
})
