import React, { useState } from "react"
import usePageTransition from "@hooks/page-transition"
import { render } from "@testing-library/react"
import { mocked } from "ts-jest/utils"
import {
  TRANSITION_TYPE_ENTER,
  TRANSITION_TYPE_POP,
  TRANSITION_TYPE_EXIT,
  TRANSITION_TYPE_MENU_ENTER,
  TRANSITION_TYPE_NEXT_PROJECT_ENTER,
  TRANSITION_TYPE_NEXT_PROJECT_EXIT,
} from "@constants"
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils"
import { useTransitionState } from "gatsby-plugin-transition-link/hooks"
import { createStateMock } from "@data/mocks"

jest.mock("gatsby-plugin-transition-link/hooks")

const mockedUseTransitionState = mocked(useTransitionState)

mockedUseTransitionState.mockReturnValue(createStateMock(TRANSITION_TYPE_ENTER))

const inviewMessage = "In view"
const outOfViewMessage = "Out of view"
const onPopCalledMessage = "On pop called"
const callbackCalledMessage = "Callback called"

// Check that correct callbacks are executed depending on visibility
const TestInViewComponent: React.FunctionComponent = () => {
  const [inview, setInviewState] = useState(false)
  const [outOfView, setOutOfViewState] = useState(false)

  const { inviewRef } = usePageTransition({
    runInview: {
      onEnter: () => {
        setInviewState(true)
      },
    },
    runOutOfView: {
      onEnter: () => {
        setOutOfViewState(true)
      },
    },
  })

  return (
    <div ref={inviewRef}>
      {inview && inviewMessage}
      {outOfView && outOfViewMessage}
    </div>
  )
}

test("Should only run runInview callbacks when in view", () => {
  const { queryByText } = render(<TestInViewComponent />)

  mockAllIsIntersecting(true)

  expect(queryByText(inviewMessage)).toBeTruthy()
  expect(queryByText(outOfViewMessage)).toBeFalsy()
})

test("Should only run runOutOfView callbacks when not in view", () => {
  const { queryByText } = render(<TestInViewComponent />)

  mockAllIsIntersecting(false)

  expect(queryByText(outOfViewMessage)).toBeTruthy()
  expect(queryByText(inviewMessage)).toBeFalsy()
})

// Ensure onPop runs when not transition type is available
const TestOnPopComponent: React.FunctionComponent = () => {
  const [onPopCalled, setOnPopCalled] = useState(false)

  const { inviewRef } = usePageTransition({
    runInview: {
      onPop: () => {
        setOnPopCalled(true)
      },
    },
  })

  return <div ref={inviewRef}>{onPopCalled && onPopCalledMessage}</div>
}

test("Should default to onPop in absence of any other entry type", () => {
  const { queryByText } = render(<TestOnPopComponent />)

  mockedUseTransitionState.mockReturnValue(createStateMock())

  mockAllIsIntersecting(true)

  expect(queryByText(onPopCalledMessage)).toBeTruthy()
})

// Ensure all callbacks are executed
const TestAllCallbacksComponent: React.FunctionComponent = () => {
  const [callbackCalled, setCallbackCalled] = useState(false)

  const { inviewRef } = usePageTransition({
    runInview: {
      onPop: () => {
        setCallbackCalled(true)
      },
      onEnter: () => {
        setCallbackCalled(true)
      },
      onEnterFromProject: () => {
        setCallbackCalled(true)
      },
      onEnterFromMenu: () => {
        setCallbackCalled(true)
      },
      onExit: () => {
        setCallbackCalled(true)
      },
      onExitFromProject: () => {
        setCallbackCalled(true)
      },
    },
  })

  return <div ref={inviewRef}>{callbackCalled && callbackCalledMessage}</div>
}

test("Should run onPop", () => {
  const { queryByText } = render(<TestAllCallbacksComponent />)

  mockedUseTransitionState.mockReturnValue(createStateMock(TRANSITION_TYPE_POP))

  mockAllIsIntersecting(true)

  expect(queryByText(callbackCalledMessage)).toBeTruthy()
})

test("Should run onExit", () => {
  const { queryByText } = render(<TestAllCallbacksComponent />)

  mockedUseTransitionState.mockReturnValue(
    createStateMock(TRANSITION_TYPE_EXIT)
  )

  mockAllIsIntersecting(true)

  expect(queryByText(callbackCalledMessage)).toBeTruthy()
})

test("Should run onEnter", () => {
  const { queryByText } = render(<TestAllCallbacksComponent />)

  mockedUseTransitionState.mockReturnValue(
    createStateMock(TRANSITION_TYPE_ENTER)
  )

  mockAllIsIntersecting(true)

  expect(queryByText(callbackCalledMessage)).toBeTruthy()
})

test("Should run onMenuEnter", () => {
  const { queryByText } = render(<TestAllCallbacksComponent />)

  mockedUseTransitionState.mockReturnValue(
    createStateMock(TRANSITION_TYPE_MENU_ENTER)
  )

  mockAllIsIntersecting(true)

  expect(queryByText(callbackCalledMessage)).toBeTruthy()
})

test("Should run onNextProjectEnter", () => {
  const { queryByText } = render(<TestAllCallbacksComponent />)

  mockedUseTransitionState.mockReturnValue(
    createStateMock(TRANSITION_TYPE_NEXT_PROJECT_ENTER)
  )

  mockAllIsIntersecting(true)

  expect(queryByText(callbackCalledMessage)).toBeTruthy()
})

test("Should run onNextProjectExit", () => {
  const { queryByText } = render(<TestAllCallbacksComponent />)

  mockedUseTransitionState.mockReturnValue(
    createStateMock(TRANSITION_TYPE_NEXT_PROJECT_EXIT)
  )

  mockAllIsIntersecting(true)

  expect(queryByText(callbackCalledMessage)).toBeTruthy()
})
