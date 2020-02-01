import React from "react"
import { renderWithTheme } from "@test-utils"

import Topbar from "./topbar"

describe("<Topbar />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Topbar
        openMenu={jest.fn}
        closeMenu={jest.fn}
        visible={true}
        open={true}
        toggleTheme={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
  it("renders as hidden correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Topbar
        openMenu={jest.fn}
        closeMenu={jest.fn}
        visible={false}
        open={true}
        toggleTheme={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
  it("renders as closed correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Topbar
        openMenu={jest.fn}
        closeMenu={jest.fn}
        visible={true}
        open={false}
        toggleTheme={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
