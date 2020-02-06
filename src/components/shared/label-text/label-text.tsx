import React from "react"
import styled from "styled-components"

interface Props {
  loading?: boolean
}

const LabelText: React.FunctionComponent<Props> = ({ children }) => (
  <Text>{children}</Text>
)

const Text = styled.div`
  color: white;
  background-color: orange;
`

export default LabelText
