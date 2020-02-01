import React from "react"
import { renderWithTheme } from "@test-utils"

import Social from "./social"
import { mockSocialIcons } from "@data/mocks"

describe("<Social />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <Social items={mockSocialIcons} open={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
