import React from "react"
import CardTrxSummary from "./card-trx-summary"
import { render } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

describe("<CardTrxSummary />", () => {
  it("renders correctly", () => {
    const tree = render(
      <CardTrxSummary transactions={mockMultipleWeb3TransactionData} />
    )
    expect(tree).toBeTruthy()
  })
})
