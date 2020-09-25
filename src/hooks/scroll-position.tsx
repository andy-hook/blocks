import { useLayoutEffect, useEffect, useRef, useCallback } from "react"
import { isBrowser } from "@utils"

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

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect

const getScrollPosition = () => {
  if (!isBrowser) {
    return { x: 0, y: 0 }
  }
  return { x: window.scrollX, y: window.scrollY }
}

const useScrollPosition = (effect: (props: ScrollProps) => void): void => {
  const currPosition = useRef(getScrollPosition())
  const prevPosition = useRef(getScrollPosition())
  const ticking = useRef(false)

  const update = useCallback(() => {
    ticking.current = false

    effect({ prevPos: prevPosition.current, currPos: currPosition.current })
  }, [effect])

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(update)
    }
    ticking.current = true
  }, [update])

  const onScroll = useCallback(() => {
    prevPosition.current = currPosition.current
    currPosition.current = getScrollPosition()

    requestTick()
  }, [requestTick])

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])
}

export default useScrollPosition
