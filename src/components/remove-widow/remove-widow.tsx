import React from "react"
import { removeWidow } from "@utils/general"

interface Props {
  children: string
}

const RemoveWidow: React.FunctionComponent<Props> = ({ children }) => {
  return <>{removeWidow(children)}</>
}

export default RemoveWidow
