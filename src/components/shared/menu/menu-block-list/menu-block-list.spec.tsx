import React from "react"
import MenuBlockList from "./menu-block-list"
import { renderWithTheme } from "@test-utils"

describe("<MenuBlockList />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "light",
      <MenuBlockList onClick={jest.fn} open={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
