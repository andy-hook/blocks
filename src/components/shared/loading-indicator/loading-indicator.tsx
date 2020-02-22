import React, { memo, useState, useEffect } from "react"
import styled from "styled-components"
import { layout, appearance } from "@style/design-tokens"
import { Spring, Transition } from "react-spring/renderprops.cjs"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"
import { themeBrand } from "@style/theme"

const LoadingIndicator: React.FunctionComponent = memo(() => {
  const { loading } = useLoadingStatusContext()

  const initialPercent = 0
  const loadingSpring = { mass: 1, tension: 50, friction: 100 }
  const loadedSpring = { mass: 1, tension: 300, friction: 20 }
  const hideShowSpring = { mass: 1, tension: 300, friction: 50 }

  const [progress, setProgress] = useState<number>(initialPercent)

  useEffect(() => {
    if (loading) {
      setProgress(40)
    } else {
      setProgress(100)
    }
  }, [loading])

  return (
    <>
      <Transition
        items={loading}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        config={hideShowSpring}
      >
        {visible =>
          visible &&
          (props => (
            <LoadingContainer style={props}>
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
          ))
        }
      </Transition>
    </>
  )
})

const LoadingContainer = styled.div`
  position: fixed;

  z-index: ${layout.zIndex.highest};

  top: 0;
  left: 0;
  width: 100%;

  height: ${appearance.borderThickness.thicker};
`

const LoadingBar = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    to left,
    ${themeBrand("light")} 0%,
    ${themeBrand()} 10%
  );

  border-radius: ${appearance.radius.pill};
`

export default LoadingIndicator
