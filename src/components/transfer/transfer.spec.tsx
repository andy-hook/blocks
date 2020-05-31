import React from "react"

import Transfer from "./transfer"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<Transfer />", () => {
  it("renders correctly", () => {
    const tree = render(<Transfer from="string" to="string" />)
    expect(tree).toBeTruthy()
  })
})
