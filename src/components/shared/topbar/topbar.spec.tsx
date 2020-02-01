import React from "react"
import { renderWithTheme } from "@test-utils"

import Topbar from "./topbar"

describe("<Topbar />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Topbar
        openMenu={jest.fn()}
        closeMenu={jest.fn}
        visible={true}
        open={true}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
