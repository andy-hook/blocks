import React from "react"
import CardDetails from "./card-details"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

fdescribe("<CardDetails />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <CardDetails />)
    expect(tree).toMatchSnapshot()
  })
})
