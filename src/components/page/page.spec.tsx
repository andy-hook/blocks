import React from "react"
import Page from "./page"
import { renderWithTheme } from "@test-utils"

describe("<Page />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <Page>Content</Page>)
    expect(tree).toBeTruthy()
  })
})
