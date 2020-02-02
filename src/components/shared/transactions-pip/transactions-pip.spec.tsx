import React from "react"
import TransactionPip from "./transactions-pip"
import { renderWithTheme } from "@test-utils"

describe("<TransactionPip />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <TransactionPip value={"string"} from="string" to="string" />
    )
    expect(tree).toMatchSnapshot()
  })
})
