import React from "react"

import MenuNavList from "./menu-nav-list"
import { renderWithTheme } from "@test-utils"

describe("<MenuNavList />", () => {
  fit("renders correctly", () => {
    const tree = renderWithTheme(
      "light",
      <MenuNavList onClick={jest.fn} open={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
