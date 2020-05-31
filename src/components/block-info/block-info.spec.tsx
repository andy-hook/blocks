import React from "react"
import BlockInfo from "./block-info"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockInfo />", () => {
  it("renders correctly", () => {
    const tree = render(<BlockInfo />)
    expect(tree).toBeTruthy()
  })
})
