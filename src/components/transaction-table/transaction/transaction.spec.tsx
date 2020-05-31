import React from "react"
import Transaction from "./transaction"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

const tableBody = document.createElement("tbody")
const renderContainer = document.body.appendChild(tableBody)

describe("<Transaction />", () => {
  it("renders correctly", () => {
    const tree = render(<Transaction blockNumber="1" />, {
      container: renderContainer,
    })
    expect(tree).toBeTruthy()
  })
})
