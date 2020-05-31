import React from "react"
import BlockBody from "./block-body"
import { render } from "@test-utils"

describe("<BlockBody />", () => {
  it("renders correctly", () => {
    const tree = render(<BlockBody trxVisible={false} />)
    expect(tree).toBeTruthy()
  })
})
