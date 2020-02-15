import React from "react"
import ColumnsTemplate from "./columns-template"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<ColumnsTemplate />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <ColumnsTemplate
        block="string"
        hash="string"
        fromTo="string"
        value="string"
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
