import React from "react"
import TransferPip from "./transfer-pip"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<TransferPip />", () => {
  it("renders correctly", () => {
    const tree = render(<TransferPip />)
    expect(tree).toBeTruthy()
  })
})
