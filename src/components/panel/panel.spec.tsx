import React from "react"

import Panel from "./panel"
import { render } from "@test-utils"

describe("<Panel />", () => {
  it("renders correctly", () => {
    const tree = render(<Panel />)

    expect(tree).toBeTruthy()
  })
})
