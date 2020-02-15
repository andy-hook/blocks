import React, { memo } from "react"
import styled from "styled-components"
import { layout } from "@style/design-tokens"
import { useLoadingStatusContext } from "@providers/loading-status-provider/loading-status-provider"

const LoadingIndicator: React.FunctionComponent = memo(() => {
  const { loading } = useLoadingStatusContext()
  return <>{loading && <LoadingContainer />}</>
})

const LoadingContainer = styled.div`
  position: fixed;

  z-index: ${layout.zIndex.highest};

  top: 0;
  left: 0;
  width: 100%;
  background-color: red;

  height: 10px;
`

export default LoadingIndicator
