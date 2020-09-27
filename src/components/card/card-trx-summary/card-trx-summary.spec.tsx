import React from "react"
import CardTrxSummary from "./card-trx-summary"
import { render } from "@test-utils"
import { transactions } from "@data/mocks"

describe("<CardTrxSummary />", () => {
  it("renders correctly", () => {
    const tree = render(<CardTrxSummary transactions={transactions} />)
    expect(tree).toBeTruthy()
  })
})
