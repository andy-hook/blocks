import React from "react"
import BlockSingleTrx from "./block-single-trx"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockSingleTrx />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockSingleTrx />)
    expect(tree).toMatchSnapshot()
  })
})
