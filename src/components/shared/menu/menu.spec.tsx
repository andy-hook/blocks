import React from "react"
import { renderWithTheme } from "@test-utils"
import { mockSocialIcons } from "@data/mocks"

import Menu from "./menu"

describe("<Menu />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Menu
        social={mockSocialIcons}
        open={true}
        dispatchCloseMenuAction={jest.fn}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
