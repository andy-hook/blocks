import React from "react"
import CardDetails from "./card-details"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

fdescribe("<CardDetails />", () => {
  it("renders correctly", () => {
    const tree = render(<CardDetails />)
    expect(tree).toBeTruthy()
  })
})
