import React from "react"

import SplitText from "./split-text"
import { renderWithTheme } from "@test-utils"

jest.mock("gsap")

describe("<SplitText />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <SplitText visible={true} animate={false}>
        This is test text
      </SplitText>
    )

    expect(tree).toMatchSnapshot()
  })

  it("renders without widow if specified", () => {
    const tree = renderWithTheme(
      "dark",
      <SplitText visible={true} animate={false} removeWidow={false}>
        This is test text
      </SplitText>
    )

    expect(tree).toMatchSnapshot()
  })
})
