import React, { memo, useState, useEffect } from "react"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import { Spring } from "react-spring/renderprops"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"

const LoadingIndicator: React.FunctionComponent = memo(() => {
  const { loading } = useLoadingStatusContext()

  const initialPercent = 0

  const [progress, setProgress] = useState<number>(initialPercent)

  const loadingSpring = { mass: 1, tension: 50, friction: 100 }
  const loadedSpring = { mass: 1, tension: 300, friction: 20 }

  useEffect(() => {
    if (loading) {
      setProgress(40)
    } else {
      setProgress(100)
    }
  }, [loading])

  return (
    <>
      <LoadingContainer>
        <Spring
          config={loading ? loadingSpring : loadedSpring}
          from={{ percent: initialPercent }}
          to={{ percent: progress }}
        >
          {({ percent }) => (
            <LoadingBar
              style={{ transform: `translate3d(-${100 - percent}%,0,0)` }}
            />
          )}
        </Spring>
      </LoadingContainer>
      }
    </>
  )
})

const LoadingContainer = styled.div`
  position: fixed;

  z-index: ${layout.zIndex.highest};

  top: 0;
  left: 0;
  width: 100%;

  height: 10px;
`

const LoadingBar = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: red;
`

export default LoadingIndicator
