import React from "react"

const usePageTransition = () => {
  const inviewRef = React.createRef()
  const inView = true
  const inviewEntry = {}

  return { inviewRef, inView, inviewEntry }
}

export default usePageTransition
