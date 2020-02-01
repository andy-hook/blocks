import React, { memo } from "react"

interface Props {
  open: boolean
  onClick: () => void
}

const ProjectList: React.FunctionComponent<Props> = memo(() => {
  return <>Items</>
})

export default ProjectList
