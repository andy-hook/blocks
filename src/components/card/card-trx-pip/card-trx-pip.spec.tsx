import React from "react"
import CardTrxPip from "./card-trx-pip"
import { renderWithTheme } from "@test-utils"

describe("<TransactionPip />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <CardTrxPip value={0.0002} from="string" to="string" />
    )
    expect(tree).toMatchSnapshot()
  })
})
