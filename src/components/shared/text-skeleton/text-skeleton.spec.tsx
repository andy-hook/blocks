import React from "react"
import TextSkeleton from "./text-skeleton"
import { renderWithTheme } from "@test-utils"

describe("<LabelText />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <TextSkeleton />)
    expect(tree).toMatchSnapshot()
  })
})
