import React from "react"
import BlockSingleTrxRow from "./block-single-trx-row"
import { renderWithTheme } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockSingleTrxRow />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme("dark", <BlockSingleTrxRow />)
    expect(tree).toMatchSnapshot()
  })
})
