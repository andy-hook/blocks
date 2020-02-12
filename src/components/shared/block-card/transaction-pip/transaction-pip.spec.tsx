import React from "react"
import TransactionPip from "./transaction-pip"
import { renderWithTheme } from "@test-utils"

describe("<TransactionPip />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <TransactionPip value={0.0002} from="string" to="string" />
    )
    expect(tree).toMatchSnapshot()
  })
})
