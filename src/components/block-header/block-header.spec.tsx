import React from "react"
import BlockHeader from "./block-header"
import { render } from "@test-utils"

describe("<BlockHeader />", () => {
  it("renders correctly", () => {
    const tree = render(<BlockHeader trxVisible={false} />)
    expect(tree).toBeTruthy()
  })
})
