import React from "react"
import Card from "./card"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<Card />", () => {
  it("renders correctly", () => {
    const tree = render(<Card blockData={""} />)
    expect(tree).toBeTruthy()
  })
})
