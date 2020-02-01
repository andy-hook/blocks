import React from "react"
import ProjectList from "./project-list"
import { renderWithTheme } from "@test-utils"

describe("<ProjectList />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "light",
      <ProjectList onClick={jest.fn} open={true} />
    )
    expect(tree).toMatchSnapshot()
  })
})
