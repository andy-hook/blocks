import React from "react"
import BlockHeaderSwitch from "./block-header-switch"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

describe("<BlockHeaderSwitch />", () => {
  it("renders correctly", () => {
    const tree = render(
      <BlockHeaderSwitch
        onDetailsClick={jest.fn}
        onTransactionsClick={jest.fn}
        trxVisible={false}
      />
    )
    expect(tree).toBeTruthy()
  })
})
