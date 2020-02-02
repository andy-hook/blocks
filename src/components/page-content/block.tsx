import styled from "styled-components"
import React, { memo } from "react"

interface Props {
  path: string
  blockHash?: string
}

const Block: React.FunctionComponent<Props> = memo((props: Props) => {
  return <Container>Hello from block #{props.blockHash}</Container>
})

export default Block

const Container = styled.div`
  color: red;
  padding-top: 300px;
  height: 2000px;
`
