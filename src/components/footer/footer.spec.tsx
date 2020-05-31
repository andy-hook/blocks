import React from "react"
import Footer from "./footer"
import { render } from "@test-utils"

describe("<Footer />", () => {
  it("renders correctly", () => {
    const tree = render(<Footer />)
    expect(tree).toBeTruthy()
  })
})
