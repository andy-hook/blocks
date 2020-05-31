import React from "react"
import BlockBody from "./block-body"
import { renderWithTheme } from "@test-utils"

describe("<BlockBody />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockBody trxVisible={false} />)
    expect(tree).toBeTruthy()
  })
})
