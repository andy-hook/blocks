import React from "react"
import Hero from "./hero"
import { render } from "@test-utils"

describe("<Hero />", () => {
  it("renders correctly", () => {
    const tree = render(<Hero />)
    expect(tree).toBeTruthy()
  })
})
