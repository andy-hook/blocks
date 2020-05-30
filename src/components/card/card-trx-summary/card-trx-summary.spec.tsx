import React from "react"
import CardTrxSummary from "./card-trx-summary"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

describe("<CardTrxSummary />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <CardTrxSummary transactions={mockMultipleWeb3TransactionData} />
    )
    expect(tree).toMatchSnapshot()
  })
})
