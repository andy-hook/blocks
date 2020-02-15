import React from "react"
import styled from "styled-components"
import { menuZindex } from "@components/shared/menu/menu"

interface Props {
  loading: boolean
}

const LoadingStrip: React.FunctionComponent<Props> = ({ loading }) => {
  return <>{loading && <Loading />}</>
}

const Loading = styled.div`
  position: fixed;

  z-index: ${menuZindex + 2};

  top: 0;
  left: 0;
  width: 100%;
  background-color: red;

  height: 10px;
`

export default LoadingStrip
