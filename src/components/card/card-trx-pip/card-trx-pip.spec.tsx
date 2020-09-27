import React from "react"
import CardTrxPip from "./card-trx-pip"
import { render } from "@test-utils"

describe("<TransactionPip />", () => {
  it("renders correctly", () => {
    const tree = render(
      <CardTrxPip value={"0.0002"} from="string" to="string" />
    )
    expect(tree).toBeTruthy()
  })
})
