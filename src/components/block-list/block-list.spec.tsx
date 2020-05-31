import React from "react"
import BlockList from "./block-list"
import { render } from "@test-utils"
import { mockMultipleWeb3BlockData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<BlockList />", () => {
  it("renders correctly", () => {
    const tree = render(<BlockList blockData={mockMultipleWeb3BlockData} />)
    expect(tree).toBeTruthy()
  })
})
