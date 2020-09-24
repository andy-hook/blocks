import React from "react"
import CardTrxSummary from "./card-trx-summary"
import { render } from "@test-utils"

describe("<CardTrxSummary />", () => {
  it("renders correctly", () => {
    const tree = render(<CardTrxSummary transactions={""} />)
    expect(tree).toBeTruthy()
  })
})
