import React from "react"
import CardContent from "./card-content"
import { renderWithTheme } from "@test-utils"
import { mockMultipleWeb3TransactionData } from "@data/mocks"

jest.mock("react-truncate-string")

describe("<CardContent />", () => {
  it("renders correctly", () => {
    const tree = renderWithTheme(
      "dark",
      <CardContent
        blockNumber={"100"}
        transactions={mockMultipleWeb3TransactionData}
      />
    )
    expect(tree).toBeTruthy()
  })
})
