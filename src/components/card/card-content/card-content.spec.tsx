import React from "react"
import CardContent from "./card-content"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<CardContent />", () => {
  it("renders correctly", () => {
    const tree = render(<CardContent blockNumber={"100"} transactions={""} />)
    expect(tree).toBeTruthy()
  })
})
