import { useLayoutEffect, useEffect, useRef, DependencyList } from "react"

interface ScrollProps {
  prevPos: {
    x: number
    y: number
  }
  currPos: {
    x: number
    y: number
  }
}

const isBrowser = typeof window !== `undefined`

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

const getScrollPosition = () => {
  if (!isBrowser) {
    return { x: 0, y: 0 }
  }
  return { x: window.scrollX, y: window.scrollY }
}

const useScrollPosition = (
  effect: (props: ScrollProps) => void,
  deps?: DependencyList
) => {
  const currPosition = useRef(getScrollPosition())
  const prevPosition = useRef(getScrollPosition())
  const ticking = useRef(false)

  const update = () => {
    ticking.current = false

    effect({ prevPos: prevPosition.current, currPos: currPosition.current })
  }

  const requestTick = () => {
    if (!ticking.current) {
      requestAnimationFrame(update)
    }
    ticking.current = true
  }

  const onScroll = () => {
    prevPosition.current = currPosition.current
    currPosition.current = getScrollPosition()

    requestTick()
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, deps)
}

export default useScrollPosition
