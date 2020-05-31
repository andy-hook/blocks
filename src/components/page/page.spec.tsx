import React from "react"
import Page from "./page"
import { render } from "@test-utils"

describe("<Page />", () => {
  it("renders correctly", () => {
    const tree = render(<Page>Content</Page>)
    expect(tree).toBeTruthy()
  })
})
