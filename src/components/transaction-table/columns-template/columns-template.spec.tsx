import React from "react"
import ColumnsTemplate from "./columns-template"
import { render } from "@test-utils"

jest.mock("react-truncate-string")

const table = document.createElement("tr")
const renderContainer = document.body.appendChild(table)

describe("<ColumnsTemplate />", () => {
  it("renders correctly", () => {
    const tree = render(
      <ColumnsTemplate
        block="string"
        hash="string"
        fromTo="string"
        value="string"
      />,
      {
        container: renderContainer,
      }
    )
    expect(tree).toBeTruthy()
  })
})
