import React from "react"
import Block from "./block"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<Block />", () => {
  it("renders correctly", () => {
    const tree = render(<Block />)
    expect(tree).toBeTruthy()
  })
})
