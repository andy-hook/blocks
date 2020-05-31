import React from "react"
import BlockInfoRow from "./block-info-row"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockInfoRow />", () => {
  it("renders correctly", () => {
    const tree = render(<BlockInfoRow name="string" value="string" />)
    expect(tree).toBeTruthy()
  })
})
