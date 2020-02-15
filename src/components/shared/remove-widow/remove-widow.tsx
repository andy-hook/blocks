import React, { memo } from "react"
import { removeWidow } from "@utils"

interface Props {
  children: string
}

const RemoveWidow: React.FunctionComponent<Props> = memo(({ children }) => {
  // const words = children.replace(/\s(?=[^\s]*$)/g, "\u00A0")

  return <>{removeWidow(children)}</>
})

export default RemoveWidow
