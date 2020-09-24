import React from "react"
import BlockList from "./block-list"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockList />", () => {
  it("renders correctly", () => {
    const tree = render(<BlockList blockData={""} />)
    expect(tree).toBeTruthy()
  })
})
