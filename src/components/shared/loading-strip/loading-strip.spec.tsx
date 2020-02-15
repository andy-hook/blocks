import React from "react"

import LoadingStrip from "./loading-strip"
import { renderWithTheme } from "@test-utils"

describe("<LoadingStrip />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <LoadingStrip loading={true} />)

    expect(tree).toMatchSnapshot()
  })
})
