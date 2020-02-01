import React from "react"
import CommonPage from "./common-page"
import { renderWithTheme } from "@test-utils"

describe("<CommonPage />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <CommonPage>Content</CommonPage>)
    expect(tree).toMatchSnapshot()
  })
})
