import React from "react"
import { render } from "@test-utils"
import Icon from "./icon"

describe("Icon", () => {
  it("renders correctly", () => {
    const tree = render(<Icon name="twitter" />)
    expect(tree).toBeTruthy()
  })
})
