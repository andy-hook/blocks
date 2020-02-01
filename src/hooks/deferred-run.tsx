import { useEffect, useRef } from "react"

const useDeferredRunEffect = (cb: () => void, deps?: any[] | undefined) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) {
      cb()
    } else {
      didMount.current = true
    }
  }, deps)
}

export default useDeferredRunEffect
