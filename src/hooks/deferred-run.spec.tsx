import React, { useState } from "react"
import useDeferredRunEffect from "@hooks/deferred-run"
import { render } from "@testing-library/react"

const TestComponent: React.FunctionComponent = () => {
  const [shouldRender, setRender] = useState<boolean>(false)

  useDeferredRunEffect(() => {
    setRender(true)
  })

  const renderTestText = () => {
    if (shouldRender) {
      return "Hello world"
    }
  }

  return <>{renderTestText()}</>
}

test("should only execute callback after first render", () => {
  const testMessage = "Hello world"
  const { queryByText, rerender } = render(<TestComponent />)

  expect(queryByText(testMessage)).toBeFalsy()

  rerender(<TestComponent />)

  expect(queryByText(testMessage)).toBeTruthy()
})
